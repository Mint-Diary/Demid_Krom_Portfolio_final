"use client";
/* eslint-disable react/no-unknown-property */

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTranslation } from "../i18n/index.jsx";

/*******************************
 * Light-mode 3D Scene Helpers *
 *******************************/

// Particle grid that forms gentle waves
function ParticleGridWave() {
  const pointsRef = useRef(null);
  const linesRef = useRef(null);
  const materialRef = useRef(null);
  const lineMaterialRef = useRef(null);

  const gridSize = 800;
  const segments = 256;
  const spacing = gridSize / segments;

  // Pre-generate geometry + colours (memoised for perf)
  const { positions, linePositions, colors, lineColors } = useMemo(() => {
    const positions = new Float32Array((segments + 1) * (segments + 1) * 3);
    const colors = new Float32Array((segments + 1) * (segments + 1) * 3);
    const linePositions = [];
    const lineColors = [];

    let index = 0;
    for (let i = 0; i <= segments; i++) {
      for (let j = 0; j <= segments; j++) {
        const x = (i - segments / 2) * spacing;
        const z = (j - segments / 2) * spacing;
        const y = 0;

        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;

        // Soft mint / teal
        colors[index * 3] = 0.2 + Math.random() * 0.3;
        colors[index * 3 + 1] = 0.7 + Math.random() * 0.3;
        colors[index * 3 + 2] = 0.6 + Math.random() * 0.3;
        index++;
      }
    }

    for (let i = 0; i <= segments; i++) {
      for (let j = 0; j <= segments; j++) {
        const idx = i * (segments + 1) + j;
        // right neighbour
        if (j < segments) {
          const rIdx = i * (segments + 1) + (j + 1);
          linePositions.push(
            positions[idx * 3],
            positions[idx * 3 + 1],
            positions[idx * 3 + 2],
            positions[rIdx * 3],
            positions[rIdx * 3 + 1],
            positions[rIdx * 3 + 2],
          );
          lineColors.push(0.3, 0.8, 0.7, 0.3, 0.8, 0.7);
        }
        // bottom neighbour
        if (i < segments) {
          const bIdx = (i + 1) * (segments + 1) + j;
          linePositions.push(
            positions[idx * 3],
            positions[idx * 3 + 1],
            positions[idx * 3 + 2],
            positions[bIdx * 3],
            positions[bIdx * 3 + 1],
            positions[bIdx * 3 + 2],
          );
          lineColors.push(0.3, 0.8, 0.7, 0.3, 0.8, 0.7);
        }
      }
    }

    return {
      positions,
      linePositions: new Float32Array(linePositions),
      colors,
      lineColors: new Float32Array(lineColors),
    };
  }, [segments, spacing, gridSize]);

  // Animate wave
  useFrame((state) => {
    const points = pointsRef.current;
    const lines = linesRef.current;
    if (!points || !lines) return;

    const time = state.clock.getElapsedTime();
    const pArray = points.geometry.attributes.position.array;
    const lArray = lines.geometry.attributes.position.array;

    for (let i = 0; i <= segments; i++) {
      for (let j = 0; j <= segments; j++) {
        const idx = i * (segments + 1) + j;
        const x = pArray[idx * 3];
        const z = pArray[idx * 3 + 2];

        const wave1 = Math.sin(x * 0.03 + time * 1.2) * 4;
        const wave2 = Math.cos(z * 0.025 + time * 0.8) * 3;
        const wave3 = Math.sin((x + z) * 0.015 + time * 1.5) * 2;
        const wave4 = Math.cos(x * 0.035 - z * 0.03 + time * 0.6) * 1.5;

        pArray[idx * 3 + 1] = wave1 + wave2 + wave3 + wave4;
      }
    }

    // sync lines with points
    let lIdx = 0;
    for (let i = 0; i <= segments; i++) {
      for (let j = 0; j <= segments; j++) {
        const idx = i * (segments + 1) + j;
        if (j < segments) {
          const rIdx = i * (segments + 1) + (j + 1);
          lArray[lIdx * 6 + 1] = pArray[idx * 3 + 1];
          lArray[lIdx * 6 + 4] = pArray[rIdx * 3 + 1];
          lIdx++;
        }
        if (i < segments) {
          const bIdx = (i + 1) * (segments + 1) + j;
          lArray[lIdx * 6 + 1] = pArray[idx * 3 + 1];
          lArray[lIdx * 6 + 4] = pArray[bIdx * 3 + 1];
          lIdx++;
        }
      }
    }
    points.geometry.attributes.position.needsUpdate = true;
    lines.geometry.attributes.position.needsUpdate = true;

    if (materialRef.current)
      materialRef.current.size = 0.2 + Math.sin(time * 2) * 0.05;
    if (lineMaterialRef.current)
      lineMaterialRef.current.opacity = 0.4 + Math.sin(time * 1.5) * 0.1;
  });

  return (
    <group position={[0, -15, -80]}>
      {/* Points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            array={colors}
            count={colors.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          ref={materialRef}
          size={0.25}
          vertexColors
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>
      {/* Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={linePositions}
            count={linePositions.length / 3}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            array={lineColors}
            count={lineColors.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          ref={lineMaterialRef}
          vertexColors
          transparent
          opacity={0.4}
        />
      </lineSegments>
    </group>
  );
}

// Floating particle cloud for depth
function FloatingParticles() {
  const particlesRef = useRef(null);
  const particleCount = 200;

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 350;
      positions[i * 3 + 1] = Math.random() * 60 + 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 350 - 80;

      const choice = Math.random();
      if (choice < 0.33) {
        colors.set([0.1, 0.6, 0.5], i * 3);
      } else if (choice < 0.66) {
        colors.set([0, 0.5, 0.6], i * 3);
      } else {
        colors.set([0.1, 0.6, 0.7], i * 3);
      }
    }
    return { positions, colors };
  }, [particleCount]);

  useFrame((state) => {
    const pts = particlesRef.current;
    if (!pts) return;

    const time = state.clock.getElapsedTime();
    const posArray = pts.geometry.attributes.position.array;

    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.02;
      posArray[i * 3] += Math.cos(time * 0.5 + i * 0.05) * 0.015;
      posArray[i * 3 + 2] += Math.sin(time * 0.3 + i * 0.07) * 0.015;
    }
    pts.geometry.attributes.position.needsUpdate = true;
    pts.rotation.y = time * 0.03;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.3} vertexColors transparent opacity={0.8} />
    </points>
  );
}

// Upper-half particles
function TopParticles() {
  const particlesRef = useRef(null);
  const particleCount = 300;

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 400;
      positions[i * 3 + 1] = Math.random() * 60 + 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 400 - 50;

      const choice = Math.random();
      if (choice < 0.25) colors.set([0.1, 0.6, 0.5], i * 3);
      else if (choice < 0.5) colors.set([0, 0.5, 0.6], i * 3);
      else if (choice < 0.75) colors.set([0.1, 0.6, 0.7], i * 3);
      else colors.set([0, 0.4, 0.5], i * 3);
    }
    return { positions, colors };
  }, [particleCount]);

  useFrame((state) => {
    const pts = particlesRef.current;
    if (!pts) return;

    const time = state.clock.getElapsedTime();
    const posArray = pts.geometry.attributes.position.array;

    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.03;
      posArray[i * 3] += Math.cos(time * 0.5 + i * 0.05) * 0.025;
      posArray[i * 3 + 2] += Math.sin(time * 0.3 + i * 0.07) * 0.025;
    }
    pts.geometry.attributes.position.needsUpdate = true;
    pts.rotation.y = time * 0.02;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.4} vertexColors transparent opacity={0.9} />
    </points>
  );
}

function LightScene() {
  return (
    <>
      <ambientLight intensity={0.6} color="#f0fdfa" />
      <directionalLight
        position={[10, 20, 10]}
        intensity={0.8}
        color="#ccfbf1"
      />
      <pointLight
        position={[-50, 30, -50]}
        color="#99f6e4"
        intensity={1.5}
        distance={100}
      />
      <pointLight
        position={[50, 30, 50]}
        color="#5eead4"
        intensity={1.5}
        distance={100}
      />
      <pointLight
        position={[0, 50, 0]}
        color="#2dd4bf"
        intensity={0.8}
        distance={120}
      />

      <ParticleGridWave />
      <FloatingParticles />
      <TopParticles />

      <fog attach="fog" args={["#f0fdfa", 60, 250]} />
    </>
  );
}

/*********************
 * Public component  *
 *********************/
export default function HeroLight() {
  const { t } = useTranslation();

  // Hero height: 100svh minus the 84px (h-21) navbar so nothing hides below
  // the fold; svh tracks the real visible height on mobile (collapsing URL bar).
  return (
    <div className="relative h-[calc(100svh-5.25rem)] overflow-hidden bg-gradient-to-b from-teal-50 via-cyan-50 to-emerald-100">
      {/* 3D Canvas */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <Canvas
          className="h-full w-full"
          camera={{ position: [0, -2, 30], fov: 60, near: 0.1, far: 1000 }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
        >
          <LightScene />
        </Canvas>
      </div>

      {/* Overlay */}
      <div
        className="relative container mx-auto flex h-full flex-col justify-center px-4 py-6 lg:px-8 lg:py-8 xl:max-w-6xl"
        style={{ zIndex: 5, position: "relative", pointerEvents: "none" }}
      >
        <div className="relative text-center">
          <h1 className="mb-4 text-4xl font-black text-slate-900 lg:text-6xl">
            {t("hero.title1")}{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {t("common.fullName")}
            </span>{" "}
            {t("hero.title2")}
          </h1>
          <p className="mx-auto text-lg/relaxed font-medium text-slate-700 lg:w-2/3 lg:text-xl/relaxed">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col justify-center gap-2 pt-6 pb-8 sm:flex-row sm:items-center sm:gap-3"
            style={{ pointerEvents: "auto" }}
          >
            <a
              href="/timeline"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-teal-500 bg-teal-500 px-5 py-2.5 text-sm leading-6 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-teal-600 hover:shadow-xl focus:ring-3 focus:ring-teal-500/50"
            >
              <span>{t("hero.cta")}</span>
            </a>
            <a
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal-200 bg-white/80 px-5 py-2.5 text-sm leading-6 font-semibold text-teal-700 backdrop-blur-sm transition-all duration-300 hover:border-teal-300 hover:bg-white hover:shadow-lg"
            >
              <span>{t("hero.ctaSecondary")}</span>
            </a>
          </div>

          {/* Cards */}
          <div
            className="group relative flex items-center justify-center gap-2 sm:gap-10"
            style={{ zIndex: 15, pointerEvents: "auto" }}
          >
            {/* max-w: 20rem, but capped by viewport height (3/4 aspect) so
                the cards never slide below the fold on flat screens */}
            <div
              data-flammable
              className="w-full max-w-[min(20rem,34svh)] rotate-12 rounded-2xl border border-teal-200 bg-white/80 p-2.5 shadow-xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src="/development_hero.png"
                className="aspect-3/4 w-full rounded-xl object-cover"
                alt={t("hero.cards.ide")}
              />
            </div>
            <div
              data-flammable
              className="mt-5 w-full max-w-[min(20rem,34svh)] rounded-2xl border border-cyan-200 bg-white/80 p-2.5 shadow-xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src="/devops_hero.png"
                className="aspect-3/4 w-full rounded-xl object-cover"
                alt={t("hero.cards.mobile")}
              />
            </div>
            <div
              data-flammable
              className="w-full max-w-[min(20rem,34svh)] -rotate-12 rounded-2xl border border-emerald-200 bg-white/80 p-2.5 shadow-xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src="/sysops_hero.png"
                className="aspect-3/4 w-full rounded-xl object-cover"
                alt={t("hero.cards.vr")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
