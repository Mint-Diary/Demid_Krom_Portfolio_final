/* eslint-disable react/prop-types */
/**
 * FireContext.jsx — state machine of the fire easter egg.
 *
 * Phases:
 *   idle          nothing burns, glass may already be cracked
 *   burning       at least one element is on fire; fire spreads on a timer
 *   gameover      everything burnt + user did nothing -> monster screen
 *   extinguishing uninterruptible sprinkler sequence, inputs locked
 *
 * Burning is tracked per DOM element (imperative classList + a Three.js
 * emitter), so the existing components stay untouched apart from
 * data-flammable attributes on the clickable cards.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Lenis from "lenis";
import { GAMEOVER_FADE_MS, GAMEOVER_HOLD_MS } from "./constants.js";
import { createFireEngine } from "./fireEngine.js";
import GameOverScreen from "./GameOverScreen.jsx";
import "./fire.css";

const GLASS_HITS_NEEDED = 10;
const SPREAD_INTERVAL_MS = 2600; // one spread step
const MAX_EMITTERS = 26; // beyond this, elements char via CSS only
const GAMEOVER_GRACE_MS = 9000; // time to react once everything burns
const CHAR_CLASSES = ["fire-burning", "fire-burnt", "fire-washing"];

const FireCtx = createContext(null);

export function useFire() {
  return useContext(FireCtx);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Everything the fire may spread to, coarse zones included. Elements that
 * contain the fire alarm are excluded: a CSS filter on an ancestor would
 * char the alarm along with it, and the alarm must stay pristine and usable.
 */
function getSpreadCandidates() {
  const alarm = document.querySelector(".fire-alarm");
  return [
    ...document.querySelectorAll(
      "[data-flammable], header, footer, main section, main h2, #timeline li",
    ),
  ].filter((el) => !(alarm && el.contains(alarm)));
}

/**
 * Wash zones for the extinguish cascade, sorted top to bottom so the
 * Lenis camera ride sweeps the page in one smooth pass:
 * Nav -> Hero -> Werdegang -> ... -> Technologien -> ... -> Footer.
 */
function getWashZones() {
  const zones = [];
  const push = (el) => {
    if (el && !zones.includes(el)) zones.push(el);
  };
  push(document.querySelector("header"));
  document.querySelectorAll("main > section").forEach(push);
  push(document.querySelector("footer"));
  return zones.sort(
    (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top,
  );
}

/** Smoothly drive the Lenis camera to a zone, centered when it fits. */
function scrollToZone(lenis, el) {
  return new Promise((resolve) => {
    const failsafe = setTimeout(resolve, 2000); // e.g. already at position
    const rect = el.getBoundingClientRect();
    const offset = -Math.max((window.innerHeight - rect.height) / 2, 0);
    lenis.scrollTo(el, {
      offset,
      duration: 1.1,
      lock: true, // user input cannot cancel the ride
      force: true, // works even while lenis is stopped
      onComplete: () => {
        clearTimeout(failsafe);
        resolve();
      },
    });
  });
}

function rectCenter(el) {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

export function FireProvider({ children }) {
  const [phase, setPhase] = useState("idle");
  const [alarmClicks, setAlarmClicks] = useState(0);
  const [locked, setLocked] = useState(false);
  const glassBroken = alarmClicks >= GLASS_HITS_NEEDED;

  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;
  const burningRef = useRef(new Set());
  const gameOverTimerRef = useRef(null);
  const sequenceTokenRef = useRef(0); // invalidates async sequences on reset/unmount
  const unlockRef = useRef(null);
  const lenisRef = useRef(null); // Lenis instance driving the camera ride

  /* ------------------------------ engine ------------------------------ */

  useEffect(() => {
    engineRef.current = createFireEngine(canvasRef.current);
    return () => {
      sequenceTokenRef.current++;
      engineRef.current?.dispose();
      engineRef.current = null;
    };
  }, []);

  /* ---------------------------- input lock ---------------------------- */

  // freezeScroll: false keeps the page programmatically scrollable (the
  // extinguish camera ride needs that); user input is blocked either way.
  const lockInput = useCallback((freezeScroll = true) => {
    if (unlockRef.current) return;
    setLocked(true);
    if (freezeScroll) document.documentElement.classList.add("fire-locked");
    const prevent = (e) => e.preventDefault();
    window.addEventListener("wheel", prevent, { passive: false });
    window.addEventListener("touchmove", prevent, { passive: false });
    window.addEventListener("keydown", prevent, true);
    unlockRef.current = () => {
      document.documentElement.classList.remove("fire-locked");
      window.removeEventListener("wheel", prevent);
      window.removeEventListener("touchmove", prevent);
      window.removeEventListener("keydown", prevent, true);
    };
  }, []);

  const unlockInput = useCallback(() => {
    unlockRef.current?.();
    unlockRef.current = null;
    setLocked(false);
  }, []);

  /* ------------------------------- reset ------------------------------- */

  const resetAll = useCallback(() => {
    sequenceTokenRef.current++;
    clearTimeout(gameOverTimerRef.current);
    gameOverTimerRef.current = null;
    lenisRef.current?.destroy();
    lenisRef.current = null;
    engineRef.current?.clearAll();
    document
      .querySelectorAll(CHAR_CLASSES.map((c) => `.${c}`).join(", "))
      .forEach((el) => el.classList.remove(...CHAR_CLASSES, "fire-wash-sweep"));
    burningRef.current = new Set();
    unlockInput();
    setPhase("idle");
    setAlarmClicks(0);
  }, [unlockInput]);

  useEffect(() => resetAll, [resetAll]); // full cleanup on unmount

  /* ------------------------------ ignition ----------------------------- */

  const ignite = useCallback((el) => {
    if (!el || burningRef.current.has(el)) return;
    burningRef.current.add(el);
    el.classList.remove("fire-washing");
    el.classList.add("fire-burning");
    const engine = engineRef.current;
    if (engine && engine.emitterCount() < MAX_EMITTERS) engine.ignite(el);
    if (phaseRef.current === "idle") setPhase("burning");
  }, []);

  // Event delegation: any click on a [data-flammable] card starts a fire.
  useEffect(() => {
    const onClick = (e) => {
      if (
        phaseRef.current === "extinguishing" ||
        phaseRef.current === "gameover"
      )
        return;
      const card = e.target.closest?.("[data-flammable]");
      if (card) ignite(card);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [ignite]);

  /* ------------------------------ spreading ---------------------------- */

  useEffect(() => {
    if (phase !== "burning") return undefined;

    const tick = () => {
      const burning = [...burningRef.current].filter((el) => el.isConnected);
      const candidates = getSpreadCandidates().filter(
        (el) =>
          !burningRef.current.has(el) &&
          // don't waste a fire on something inside an already-burning zone
          !burning.some((b) => b.contains(el)),
      );

      if (candidates.length === 0) {
        // Everything is ablaze. Give the user a last chance, then judge them.
        if (!gameOverTimerRef.current) {
          gameOverTimerRef.current = setTimeout(() => {
            if (phaseRef.current === "burning") setPhase("gameover");
          }, GAMEOVER_GRACE_MS);
        }
        return;
      }

      // Fire jumps to whatever is closest to an existing flame.
      const centers = burning.map(rectCenter);
      const scored = candidates
        .map((el) => {
          const c = rectCenter(el);
          const d = Math.min(
            ...centers.map((b) => Math.hypot(b.x - c.x, b.y - c.y)),
            Infinity,
          );
          return { el, d };
        })
        .sort((a, b) => a.d - b.d);

      const jumps = 1 + Math.min(2, Math.floor(burning.length / 5));
      scored.slice(0, jumps).forEach(({ el }) => ignite(el));
    };

    const id = setInterval(tick, SPREAD_INTERVAL_MS);
    return () => clearInterval(id);
  }, [phase, ignite]);

  /* ----------------------------- game over ----------------------------- */

  useEffect(() => {
    if (phase !== "gameover") return undefined;
    lockInput();
    // Fade to black + 20s of guilt (with countdown), then everything comes back.
    const id = setTimeout(resetAll, GAMEOVER_FADE_MS + GAMEOVER_HOLD_MS);
    return () => clearTimeout(id);
  }, [phase, lockInput, resetAll]);

  /* ------------------------- extinguish sequence ------------------------ */

  const startExtinguish = useCallback(async () => {
    if (phaseRef.current === "extinguishing" || phaseRef.current === "gameover")
      return;
    const token = ++sequenceTokenRef.current;
    const alive = () => sequenceTokenRef.current === token;

    clearTimeout(gameOverTimerRef.current);
    gameOverTimerRef.current = null;
    setPhase("extinguishing");
    // No scroll freeze: the Lenis camera ride below must be able to scroll.
    lockInput(false);

    // Lenis takes over the scroll; stop() kills user control, scrollTo with
    // { lock, force } still drives the cinematic ride.
    const lenis = new Lenis({ autoRaf: true });
    lenisRef.current = lenis;
    lenis.stop();

    const engine = engineRef.current;
    engine?.startRain();
    await sleep(1200); // sprinklers drop from the ceiling, water builds up
    if (!alive()) return;

    // Camera ride: glide to each zone, then wash it — burning or not.
    for (const zone of getWashZones()) {
      await scrollToZone(lenis, zone);
      if (!alive()) return;
      washZone(zone, engine, burningRef.current);
      await sleep(1000);
      if (!alive()) return;
    }

    // Catch any stragglers outside the known zones.
    for (const el of [...burningRef.current])
      washElement(el, burningRef.current);
    engine?.extinguishWithin(document.documentElement);

    // Ride back to the alarm so the user sees the glass restore itself.
    const home = document.getElementById("tech");
    if (home) await scrollToZone(lenis, home);
    if (!alive()) return;
    engine?.stopRain();
    await sleep(1000);
    if (!alive()) return;
    resetAll();
  }, [lockInput, resetAll]);

  /* ------------------------------- alarm ------------------------------- */

  const hitGlass = useCallback(() => {
    if (phaseRef.current === "extinguishing") return;
    setAlarmClicks((n) => Math.min(n + 1, GLASS_HITS_NEEDED));
  }, []);

  const value = useMemo(
    () => ({
      phase,
      alarmClicks,
      glassBroken,
      glassHitsNeeded: GLASS_HITS_NEEDED,
      hitGlass,
      pressAlarm: startExtinguish,
    }),
    [phase, alarmClicks, glassBroken, hitGlass, startExtinguish],
  );

  return (
    <FireCtx.Provider value={value}>
      {children}
      <canvas ref={canvasRef} className="fire-canvas" aria-hidden="true" />
      {phase === "extinguishing" && (
        <div className="fire-sprinklers" aria-hidden="true">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="fire-sprinkler-head"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="fire-sprinkler-body" />
              <span className="fire-sprinkler-plate" />
            </div>
          ))}
        </div>
      )}
      {locked && <div className="fire-input-shield" aria-hidden="true" />}
      <GameOverScreen />
    </FireCtx.Provider>
  );
}

/* --------------------------- wash helpers --------------------------- */

function washElement(el, burningSet) {
  el.classList.remove("fire-burning", "fire-burnt");
  el.classList.add("fire-washing");
  setTimeout(() => el.classList.remove("fire-washing"), 1600);
  burningSet.delete(el);
}

function washZone(zone, engine, burningSet) {
  // Blue water sheen sweeping over the zone, burning or not.
  zone.classList.add("fire-wash-sweep");
  setTimeout(() => zone.classList.remove("fire-wash-sweep"), 1700);
  engine?.extinguishWithin(zone);
  if (engine && zone.isConnected)
    engine.steamAtRect(zone.getBoundingClientRect());
  for (const el of [...burningSet]) {
    if (el === zone || zone.contains(el)) washElement(el, burningSet);
  }
}
