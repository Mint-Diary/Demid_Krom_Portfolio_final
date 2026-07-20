/* eslint-disable react/no-unknown-property */
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTranslation } from "../i18n/index.jsx";

// Floating Neon Particles (extracted from hero section)
function NeonParticles() {
  const particlesRef = useRef(null);
  const particleCount = 500; // Increased particle count

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 600; // Much wider spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200; // Full vertical range (negative to positive)
      positions[i * 3 + 2] = (Math.random() - 0.5) * 600 - 50; // Deeper spread

      // Green neon colors
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0.2; // R
        colors[i * 3 + 1] = 1; // G (bright green)
        colors[i * 3 + 2] = 0.3; // B
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0.4; // R (lime green)
        colors[i * 3 + 1] = 1; // G
        colors[i * 3 + 2] = 0.1; // B
      } else {
        colors[i * 3] = 0.1; // R (emerald green)
        colors[i * 3 + 1] = 0.8; // G
        colors[i * 3 + 2] = 0.4; // B
      }
    }

    return { positions, colors };
  }, [particleCount]);

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime();
      const positions = particlesRef.current.geometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.03;
        positions[i * 3] += Math.cos(time * 0.5 + i * 0.05) * 0.02;
        positions[i * 3 + 2] += Math.sin(time * 0.3 + i * 0.07) * 0.02;
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.rotation.y = time * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.8} // Much bigger particles
        vertexColors={true}
        transparent={true}
        opacity={0.9} // Slightly more opaque
      />
    </points>
  );
}

// Simple Scene with just particles
function ParticleScene() {
  return (
    <>
      {/* Lighting - Green theme */}
      <ambientLight intensity={0.3} color="#001100" />
      <directionalLight
        position={[10, 20, 10]}
        intensity={0.5}
        color="#00ff44"
      />
      <pointLight
        position={[-50, 30, -50]}
        color="#00ff88"
        intensity={2}
        distance={100}
      />
      <pointLight
        position={[50, 30, 50]}
        color="#44ff00"
        intensity={2}
        distance={100}
      />
      <pointLight
        position={[0, 50, 0]}
        color="#88ff44"
        intensity={0.5}
        distance={120}
      />

      {/* Floating Neon Particles */}
      <NeonParticles />

      {/* Atmospheric fog - Green tinted, extended range */}
      <fog attach="fog" args={["#001100", 60, 400]} />
    </>
  );
}

export default function TimelineComponent() {
  // i18next
  const { t } = useTranslation();
  return (
    <>
      {/* Background wrapper that fills full width with particles */}
      <div className="relative w-full overflow-hidden bg-slate-100 py-10 dark:bg-slate-900">
        {/* 3D Canvas Background - Particles Only */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <Canvas
            className="h-full w-full"
            camera={{
              position: [0, 0, 80], // Centered camera position
              fov: 75, // Wider field of view to see more particles
              near: 0.1,
              far: 1500, // Extended far clipping for larger area
            }}
            gl={{
              alpha: true,
              antialias: true,
              powerPreference: "high-performance",
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <ParticleScene />
          </Canvas>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
            {t("timeline.title")}
          </h2>
          <p className="mx-auto mb-16 text-xl leading-relaxed font-medium text-slate-700 lg:w-2/3 dark:text-slate-300">
            {t("timeline.subtitle")}
          </p>
        </div>

        {/* Timeline content - new left aligned layout */}
        <div
          className="relative mx-auto w-full max-w-3xl py-5 dark:text-slate-100"
          style={{ zIndex: 10 }}
        >
          {/* Vertical Guide */}
          <div
            className="absolute top-0 bottom-0 left-0 flex w-10 flex-col justify-center md:w-12"
            aria-hidden="true"
          >
            <div className="mx-auto h-2.5 w-1 grow-0 rounded-t bg-linear-to-b from-transparent to-teal-100 dark:to-teal-900" />
            <div className="mx-auto w-1 grow bg-teal-100 dark:bg-teal-900" />
            <div className="mx-auto h-2.5 w-1 grow-0 rounded-b bg-linear-to-t from-transparent to-teal-100 dark:to-teal-900" />
          </div>
          {/* END Vertical Guide */}

          {/* Timeline — newest first; entries live in the locales under timeline.events */}
          <ul className="relative space-y-4 pl-10 md:pl-12">
            {["derivatives", "odav", "finalSchool"].map((event) => (
              <li key={event} className="relative">
                <div className="absolute top-0 bottom-0 left-0 mt-5 flex w-10 -translate-x-full justify-center md:w-12">
                  <div className="size-3 rounded-full bg-teal-500 ring-3 ring-teal-100 ring-offset-2 dark:bg-teal-300 dark:ring-teal-900 dark:ring-offset-slate-900" />
                </div>
                <div
                  data-flammable
                  className="rounded-xl bg-slate-100 p-4 hover:ring-3 hover:ring-slate-100 hover:ring-offset-2 dark:bg-slate-800 dark:ring-offset-slate-900 dark:hover:ring-slate-700"
                >
                  <h4 className="mb-2 font-semibold">
                    {t(`timeline.events.${event}.title`)}
                  </h4>
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {t(`timeline.events.${event}.description`)}
                  </p>
                </div>
                <div className="px-4 py-2 lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:mt-4 lg:-ml-12 lg:flex lg:w-40 lg:-translate-x-full lg:flex-col lg:p-0 lg:text-right">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {t(`timeline.events.${event}.date`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          {/* END Timeline */}
        </div>
        {/* END new layout */}
      </div>
    </>
  );
}
