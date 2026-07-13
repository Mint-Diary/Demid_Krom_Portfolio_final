/**
 * fireEngine.js — Three.js particle overlay for the fire easter egg.
 *
 * Renders on a single fixed, full-viewport, pointer-events:none canvas:
 *   - Fire emitters: GPU-looped point particles pinned to DOM elements
 *     (positions re-read from getBoundingClientRect each frame, so they
 *     follow the page while scrolling). Each emitter carries two layers:
 *     additive flames and a slower, dark smoke column above them.
 *   - Sprinkler rain: one global particle sheet falling from the top edge.
 *   - Steam puffs: one-shot white bursts when a fire is put out.
 *
 * The orthographic camera maps world units 1:1 to CSS pixels of the
 * viewport: DOM point (x, y) -> world (x, -y). Particle motion happens
 * entirely in the vertex shaders (driven by a uTime uniform), so the CPU
 * cost per frame is just uniform updates + one rect read per emitter.
 *
 * The render loop self-suspends when there is nothing to draw, and
 * dispose() releases every GL resource, so idle cost is zero.
 */
import * as THREE from "three";

const MAX_DPR = 2; // cap devicePixelRatio — enough for crisp water drops
const RAIN_HEADS = 8; // must match the number of DOM sprinkler heads
const RAIN_DROPS = 2400;

/* ------------------------------ shaders ------------------------------ */

const FIRE_VERT = /* glsl */ `
  uniform float uTime;
  uniform float uIntensity;
  uniform float uWidth;
  uniform float uHeight;
  uniform float uDpr;
  attribute float aSeed;
  attribute float aSpeed;
  attribute float aSize;
  attribute float aOffset;
  varying float vLife;

  void main() {
    // Endlessly looping life cycle, offset per particle by its seed.
    float life = fract(uTime * aSpeed + aSeed);
    vLife = life;

    // Start spread across the element's width, converge while rising, add sway.
    float sway = sin((uTime + aSeed * 43.0) * (1.5 + aSpeed * 2.0)) * uWidth * 0.04 * life;
    float x = aOffset * uWidth * (1.0 - life * 0.6) + sway;
    float y = life * uHeight * (0.55 + 0.45 * fract(aSeed * 7.31));

    vec4 mv = modelViewMatrix * vec4(position + vec3(x, y, 0.0), 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uDpr * uIntensity * (1.0 - life * 0.7);
  }
`;

const FIRE_FRAG = /* glsl */ `
  uniform float uIntensity;
  varying float vLife;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float shape = smoothstep(0.5, 0.05, d);
    // Yellow core -> orange -> deep red/smoke over the particle's life.
    vec3 col = mix(vec3(1.0, 0.93, 0.45), vec3(1.0, 0.42, 0.05), smoothstep(0.0, 0.45, vLife));
    col = mix(col, vec3(0.7, 0.09, 0.02), smoothstep(0.4, 0.85, vLife));
    float fade = smoothstep(0.0, 0.08, vLife) * (1.0 - smoothstep(0.7, 1.0, vLife));
    gl_FragColor = vec4(col, shape * fade * uIntensity);
  }
`;

const SMOKE_VERT = /* glsl */ `
  uniform float uTime;
  uniform float uIntensity;
  uniform float uWidth;
  uniform float uHeight;
  uniform float uDpr;
  attribute float aSeed;
  attribute float aSpeed;
  attribute float aSize;
  attribute float aOffset;
  varying float vLife;

  void main() {
    // Smoke loops slower than fire and starts where the flames end.
    float life = fract(uTime * aSpeed * 0.35 + aSeed);
    vLife = life;

    float sway = sin((uTime * 0.6 + aSeed * 37.0) * (1.0 + aSpeed)) * uWidth * 0.12 * life;
    float x = aOffset * uWidth * (0.9 + life * 0.7) + sway;
    float y = uHeight * (0.45 + life * 2.1);

    vec4 mv = modelViewMatrix * vec4(position + vec3(x, y, 0.0), 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uDpr * uIntensity * (0.7 + life * 1.8);
  }
`;

const SMOKE_FRAG = /* glsl */ `
  uniform float uIntensity;
  varying float vLife;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float shape = smoothstep(0.5, 0.12, d);
    // Dark soot that lightens and thins as it disperses upwards.
    vec3 col = mix(vec3(0.07, 0.06, 0.06), vec3(0.38, 0.36, 0.35), vLife);
    float fade = smoothstep(0.0, 0.22, vLife) * (1.0 - smoothstep(0.55, 1.0, vLife));
    gl_FragColor = vec4(col, shape * fade * 0.34 * uIntensity);
  }
`;

const RAIN_VERT = /* glsl */ `
  uniform float uTime;
  uniform float uIntensity;
  uniform float uW;
  uniform float uH;
  uniform float uDpr;
  attribute float aHead;
  attribute float aSeed;
  attribute float aSpeed;
  attribute float aSpread;
  varying float vAlpha;

  void main() {
    float fall = fract(uTime * aSpeed + aSeed);
    // Each drop belongs to one sprinkler head and fans out in a cone as it
    // falls. It spawns at the head's deflector plate (~46px below the top
    // edge, see .fire-sprinkler-head) and fades in so it doesn't pop.
    // The cone stays needle-thin at the plate and opens to ~±144px at the
    // bottom, so neighbouring cones overlap into full-width water.
    float x = (aHead + 0.5) / ${RAIN_HEADS}.0 * uW + aSpread * fall * 288.0;
    float y = -46.0 - fall * (uH + 30.0);
    vAlpha = uIntensity * (0.4 + 0.6 * fract(aSeed * 5.7)) * smoothstep(0.0, 0.06, fall);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(x, y, 0.0, 1.0);
    gl_PointSize = (12.0 + 7.0 * fract(aSeed * 3.3)) * uDpr;
  }
`;

const RAIN_FRAG = /* glsl */ `
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    // Crisp elongated droplet: solid core, just enough smoothstep for
    // anti-aliasing instead of the earlier soft blur.
    float body = smoothstep(0.17, 0.09, abs(uv.x)) * smoothstep(0.5, 0.38, abs(uv.y));
    gl_FragColor = vec4(0.62, 0.8, 1.0, body * 0.85 * vAlpha);
  }
`;

const STEAM_VERT = /* glsl */ `
  uniform float uProgress;
  uniform float uW;
  uniform float uH;
  uniform float uDpr;
  attribute vec2 aStart;
  attribute float aSeed;
  attribute float aSize;
  varying float vAlpha;

  void main() {
    float p = clamp(uProgress * (0.7 + 0.6 * aSeed), 0.0, 1.0);
    vec3 pos = position + vec3(
      aStart.x * uW + sin((aSeed + p) * 12.0) * 8.0 * p,
      aStart.y * uH * 0.5 + p * (50.0 + aSeed * 90.0),
      0.0
    );
    vAlpha = (1.0 - p) * smoothstep(0.0, 0.12, p);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * uDpr * (0.5 + p * 1.3);
  }
`;

const STEAM_FRAG = /* glsl */ `
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float shape = smoothstep(0.5, 0.1, d);
    gl_FragColor = vec4(0.88, 0.92, 0.96, shape * 0.35 * vAlpha);
  }
`;

/* --------------------------- geometry helpers --------------------------- */

function buildFireGeometry(count) {
  const geo = new THREE.BufferGeometry();
  const zeros = new Float32Array(count * 3); // all particles originate at mesh position
  const seed = new Float32Array(count);
  const speed = new Float32Array(count);
  const size = new Float32Array(count);
  const offset = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    seed[i] = Math.random();
    speed[i] = 0.35 + Math.random() * 0.4; // life cycles per second
    size[i] = 22 + Math.random() * 36;
    offset[i] = Math.random() - 0.5;
  }
  geo.setAttribute("position", new THREE.BufferAttribute(zeros, 3));
  geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
  geo.setAttribute("aSpeed", new THREE.BufferAttribute(speed, 1));
  geo.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
  geo.setAttribute("aOffset", new THREE.BufferAttribute(offset, 1));
  return geo;
}

function buildRainGeometry() {
  const geo = new THREE.BufferGeometry();
  const zeros = new Float32Array(RAIN_DROPS * 3);
  const head = new Float32Array(RAIN_DROPS);
  const seed = new Float32Array(RAIN_DROPS);
  const speed = new Float32Array(RAIN_DROPS);
  const spread = new Float32Array(RAIN_DROPS);
  for (let i = 0; i < RAIN_DROPS; i++) {
    head[i] = Math.floor(Math.random() * RAIN_HEADS);
    seed[i] = Math.random();
    speed[i] = 0.9 + Math.random() * 0.6; // full screen fall in ~0.7–1.1s
    spread[i] = Math.random() - 0.5;
  }
  geo.setAttribute("position", new THREE.BufferAttribute(zeros, 3));
  geo.setAttribute("aHead", new THREE.BufferAttribute(head, 1));
  geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
  geo.setAttribute("aSpeed", new THREE.BufferAttribute(speed, 1));
  geo.setAttribute("aSpread", new THREE.BufferAttribute(spread, 1));
  return geo;
}

function buildSteamGeometry(count) {
  const geo = new THREE.BufferGeometry();
  const zeros = new Float32Array(count * 3);
  const start = new Float32Array(count * 2);
  const seed = new Float32Array(count);
  const size = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    start[i * 2] = Math.random() - 0.5;
    start[i * 2 + 1] = Math.random() - 0.5;
    seed[i] = Math.random();
    size[i] = 30 + Math.random() * 50;
  }
  geo.setAttribute("position", new THREE.BufferAttribute(zeros, 3));
  geo.setAttribute("aStart", new THREE.BufferAttribute(start, 2));
  geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
  geo.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
  return geo;
}

/* ------------------------------- engine ------------------------------- */

/**
 * Creates the particle engine bound to a <canvas>. Returns null when WebGL
 * is unavailable (the easter egg then degrades to CSS-only charring).
 */
export function createFireEngine(canvas) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
  } catch {
    return null;
  }
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(0, 1, 0, -1, -100, 100);
  const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

  let vw = 0;
  let vh = 0;
  function resize() {
    // Use the layout viewport, not window.innerWidth: innerWidth includes
    // the scrollbar while fixed DOM elements (canvas, sprinkler heads) end
    // at its inner edge — this keeps the water aligned with the heads.
    vw = document.documentElement.clientWidth || window.innerWidth;
    vh = document.documentElement.clientHeight || window.innerHeight;
    camera.right = vw;
    camera.bottom = -vh;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(dpr);
    renderer.setSize(vw, vh, false); // CSS size is handled by the stylesheet
    if (rain) rain.material.uniforms.uH.value = vh;
    if (rain) rain.material.uniforms.uW.value = vw;
  }

  /** el -> { points, mat, state: 'in'|'on'|'out', intensity } */
  const emitters = new Map();
  const steams = new Set();
  let rain = null;
  let rainTarget = 0;
  let rainIntensity = 0;

  let rafId = null;
  let time = 0;
  let lastNow = 0;
  let disposed = false;

  function ensureLoop() {
    if (rafId === null && !disposed) {
      lastNow = performance.now();
      rafId = requestAnimationFrame(frame);
    }
  }

  function isIdle() {
    return (
      emitters.size === 0 &&
      steams.size === 0 &&
      rainTarget === 0 &&
      rainIntensity <= 0
    );
  }

  function removeEmitter(el) {
    const em = emitters.get(el);
    if (!em) return;
    for (const layer of em.layers) {
      scene.remove(layer.points);
      layer.points.geometry.dispose();
      layer.mat.dispose();
    }
    emitters.delete(el);
  }

  function removeSteam(steam) {
    scene.remove(steam.points);
    steam.points.geometry.dispose();
    steam.mat.dispose();
    steams.delete(steam);
  }

  function frame(now) {
    rafId = null;
    if (disposed) return;
    const dt = Math.min((now - lastNow) / 1000, 0.05);
    lastNow = now;
    time += dt;

    // --- fire emitters follow their DOM element ---
    for (const [el, em] of emitters) {
      if (!el.isConnected) {
        removeEmitter(el); // element left the page (route change etc.)
        continue;
      }
      const r = el.getBoundingClientRect();

      if (em.state === "in") {
        em.intensity = Math.min(1, em.intensity + dt / 1.4);
        if (em.intensity === 1) em.state = "on";
      } else if (em.state === "out") {
        em.intensity -= dt / 0.9;
        if (em.intensity <= 0) {
          removeEmitter(el);
          continue;
        }
      }

      // Fire and smoke layers share origin and sizing. Smoke rises far
      // above the element, hence the generous culling headroom below.
      const visible = r.bottom > -900 && r.top < vh + 300;
      const width = Math.max(r.width * 0.85, 24);
      const height = THREE.MathUtils.clamp(r.height * 1.5, 90, 360);
      for (const layer of em.layers) {
        layer.points.visible = visible;
        layer.points.position.set(
          r.left + r.width / 2,
          -(r.bottom - Math.min(r.height * 0.15, 12)),
          0,
        );
        layer.mat.uniforms.uTime.value = time;
        layer.mat.uniforms.uWidth.value = width;
        layer.mat.uniforms.uHeight.value = height;
        layer.mat.uniforms.uIntensity.value = em.intensity;
      }
    }

    // --- sprinkler rain fades toward its target ---
    if (rainIntensity !== rainTarget) {
      const dir = Math.sign(rainTarget - rainIntensity);
      rainIntensity = THREE.MathUtils.clamp(
        rainIntensity + dir * (dt / 0.9),
        0,
        1,
      );
    }
    if (rain) {
      rain.visible = rainIntensity > 0;
      rain.material.uniforms.uTime.value = time;
      rain.material.uniforms.uIntensity.value = rainIntensity;
    }

    // --- one-shot steam puffs ---
    for (const steam of steams) {
      steam.progress += dt / 1.4;
      if (steam.progress >= 1) {
        removeSteam(steam);
        continue;
      }
      steam.mat.uniforms.uProgress.value = steam.progress;
    }

    renderer.render(scene, camera);
    if (!isIdle()) {
      rafId = requestAnimationFrame(frame);
    } else {
      renderer.clear(); // leave a fully transparent canvas behind
    }
  }

  window.addEventListener("resize", resize);
  resize();

  return {
    /** Attach a looping flame + smoke column to a DOM element. */
    ignite(el) {
      if (emitters.has(el)) return;
      const r = el.getBoundingClientRect();
      const fireCount = Math.round(THREE.MathUtils.clamp(r.width / 2, 90, 320));
      const smokeCount = Math.round(fireCount * 0.5);

      const makeUniforms = () => ({
        uTime: { value: time },
        uIntensity: { value: 0 },
        uWidth: { value: r.width },
        uHeight: { value: 120 },
        uDpr: { value: dpr },
      });

      // Smoke first (renderOrder below), additive flames blaze on top of it.
      const layers = [
        {
          vert: SMOKE_VERT,
          frag: SMOKE_FRAG,
          count: smokeCount,
          blending: THREE.NormalBlending,
          renderOrder: 1,
        },
        {
          vert: FIRE_VERT,
          frag: FIRE_FRAG,
          count: fireCount,
          blending: THREE.AdditiveBlending,
          renderOrder: 2,
        },
      ].map(({ vert, frag, count, blending, renderOrder }) => {
        const mat = new THREE.ShaderMaterial({
          vertexShader: vert,
          fragmentShader: frag,
          uniforms: makeUniforms(),
          transparent: true,
          depthWrite: false,
          depthTest: false,
          blending,
        });
        const points = new THREE.Points(buildFireGeometry(count), mat);
        points.frustumCulled = false;
        points.renderOrder = renderOrder;
        scene.add(points);
        return { points, mat };
      });

      emitters.set(el, { layers, state: "in", intensity: 0 });
      ensureLoop();
    },

    /** Fade a flame out and replace it with a steam puff. */
    extinguish(el, { steam = true } = {}) {
      const em = emitters.get(el);
      if (!em) return;
      em.state = "out";
      if (steam && el.isConnected) this.steamAtRect(el.getBoundingClientRect());
    },

    /** Extinguish every flame attached to elements inside rootEl. */
    extinguishWithin(rootEl) {
      for (const el of emitters.keys()) {
        if (rootEl === el || rootEl.contains(el)) this.extinguish(el);
      }
    },

    /** White puff covering a viewport rect (used for the wash cascade). */
    steamAtRect(rect) {
      const count = Math.round(THREE.MathUtils.clamp(rect.width / 12, 14, 60));
      const mat = new THREE.ShaderMaterial({
        vertexShader: STEAM_VERT,
        fragmentShader: STEAM_FRAG,
        uniforms: {
          uProgress: { value: 0 },
          uW: { value: Math.max(rect.width, 60) },
          uH: { value: Math.max(rect.height, 40) },
          uDpr: { value: dpr },
        },
        transparent: true,
        depthWrite: false,
        depthTest: false,
      });
      const points = new THREE.Points(buildSteamGeometry(count), mat);
      points.frustumCulled = false;
      points.position.set(
        rect.left + rect.width / 2,
        -(rect.top + rect.height / 2),
        0,
      );
      scene.add(points);
      steams.add({ points, mat, progress: 0 });
      ensureLoop();
    },

    startRain() {
      if (!rain) {
        const mat = new THREE.ShaderMaterial({
          vertexShader: RAIN_VERT,
          fragmentShader: RAIN_FRAG,
          uniforms: {
            uTime: { value: time },
            uIntensity: { value: 0 },
            uW: { value: vw },
            uH: { value: vh },
            uDpr: { value: dpr },
          },
          transparent: true,
          depthWrite: false,
          depthTest: false,
        });
        rain = new THREE.Points(buildRainGeometry(), mat);
        rain.frustumCulled = false;
        scene.add(rain);
      }
      rainTarget = 1;
      ensureLoop();
    },

    stopRain() {
      rainTarget = 0;
      ensureLoop();
    },

    emitterCount() {
      return emitters.size;
    },

    /** Instantly remove everything (used by the full reset). */
    clearAll() {
      for (const el of [...emitters.keys()]) removeEmitter(el);
      for (const steam of [...steams]) removeSteam(steam);
      rainTarget = 0;
      rainIntensity = 0;
      if (rain) rain.visible = false;
      renderer.clear();
    },

    dispose() {
      disposed = true;
      if (rafId !== null) cancelAnimationFrame(rafId);
      this.clearAll();
      if (rain) {
        scene.remove(rain);
        rain.geometry.dispose();
        rain.material.dispose();
        rain = null;
      }
      window.removeEventListener("resize", resize);
      renderer.dispose();
    },
  };
}
