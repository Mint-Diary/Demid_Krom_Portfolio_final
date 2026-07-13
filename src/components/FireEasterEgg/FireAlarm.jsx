/**
 * FireAlarm.jsx — the red "Feuermelder", rendered in-flow directly next to
 * the technology cards in the Tech section (see Tech.jsx).
 *
 * The fire never chars it: FireContext excludes every ancestor of
 * `.fire-alarm` from the spread, because a CSS filter on an ancestor would
 * darken the alarm and it must stay pristine and usable. While the page
 * burns it only glows urgently — position and size never change.
 *
 * Interaction: 10 hits crack and finally shatter the glass, revealing the
 * red button that starts the extinguish sequence.
 */
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "../../i18n/index.jsx";
import { useFire } from "./FireContext.jsx";

/** Tiny "{placeholder}" interpolation for locale strings. */
function fmt(template, vars) {
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replaceAll(`{${key}}`, value),
    template,
  );
}

// Crack lines (100x140 viewBox), revealed in stages as the glass takes hits.
const CRACK_STAGES = [
  ["M50 70 L36 52", "M50 70 L66 60"],
  ["M50 70 L30 88", "M50 70 L74 92", "M36 52 L26 36"],
  ["M50 70 L54 28", "M50 70 L18 66", "M66 60 L86 46"],
  [
    "M50 70 L46 116",
    "M50 70 L82 108",
    "M30 88 L14 104",
    "M54 28 L60 10",
    "M18 66 L6 58",
  ],
];

function crackStage(clicks) {
  if (clicks >= 9) return 4;
  if (clicks >= 7) return 3;
  if (clicks >= 4) return 2;
  if (clicks >= 1) return 1;
  return 0;
}

export default function FireAlarm() {
  const {
    phase,
    alarmClicks,
    glassBroken,
    glassHitsNeeded,
    hitGlass,
    pressAlarm,
  } = useFire();
  const { t } = useTranslation();
  const [shards, setShards] = useState(false);

  const burning = phase === "burning";

  // Fly glass shards for a moment when the glass shatters.
  useEffect(() => {
    if (!glassBroken) {
      setShards(false);
      return undefined;
    }
    setShards(true);
    const id = setTimeout(() => setShards(false), 1000);
    return () => clearTimeout(id);
  }, [glassBroken]);

  // Random shard trajectories, fixed per shatter.
  const shardStyles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        "--dx": `${(Math.random() - 0.5) * 160}px`,
        "--dy": `${40 + Math.random() * 120}px`,
        "--rot": `${(Math.random() - 0.5) * 540}deg`,
        left: `${10 + (i % 4) * 22}%`,
        top: `${10 + Math.floor(i / 4) * 28}%`,
        clipPath: `polygon(${50 + (Math.random() - 0.5) * 40}% 0%, 100% ${
          60 + Math.random() * 40
        }%, ${Math.random() * 30}% 100%)`,
      })),
    // regenerate for every new shatter
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [glassBroken],
  );

  const stage = crackStage(alarmClicks);
  const hitsLeft = glassHitsNeeded - alarmClicks;

  return (
    <div className={`fire-alarm ${burning ? "fire-alarm--alert" : ""}`}>
      <div className="fire-alarm__body">
        <div className="fire-alarm__label">
          {t("fire.alarm.line1")}
          <br />
          {t("fire.alarm.line2")}
        </div>

        <div className="fire-alarm__window">
          {!glassBroken ? (
            <button
              key={alarmClicks} // remount retriggers the hit-wobble animation
              type="button"
              className={`fire-alarm__glass ${alarmClicks > 0 ? "fire-alarm__glass--hit" : ""}`}
              onClick={hitGlass}
              aria-label={t("fire.alarm.ariaBreak")}
            >
              {stage > 0 && (
                <svg
                  className="fire-alarm__cracks"
                  viewBox="0 0 100 140"
                  aria-hidden="true"
                >
                  {CRACK_STAGES.slice(0, stage)
                    .flat()
                    .map((d) => (
                      <path key={d} d={d} />
                    ))}
                  <circle cx="50" cy="70" r={1.5 + stage} />
                </svg>
              )}
            </button>
          ) : (
            <button
              type="button"
              className={`fire-alarm__button ${burning ? "fire-alarm__button--urgent" : ""}`}
              onClick={pressAlarm}
              aria-label={t("fire.alarm.ariaExtinguish")}
            >
              {t("fire.alarm.button")}
            </button>
          )}

          {shards && (
            <div className="fire-alarm__shards" aria-hidden="true">
              {shardStyles.map((style, i) => (
                <span key={i} className="fire-alarm__shard" style={style} />
              ))}
            </div>
          )}
        </div>

        <div className="fire-alarm__hint">
          {glassBroken
            ? burning
              ? t("fire.alarm.hintUrgent")
              : t("fire.alarm.hintPress")
            : alarmClicks > 0
              ? fmt(t("fire.alarm.hintHits"), { count: hitsLeft })
              : t("fire.alarm.hintIdle")}
        </div>
      </div>
    </div>
  );
}
