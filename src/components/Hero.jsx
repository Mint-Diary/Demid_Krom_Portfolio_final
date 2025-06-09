"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTranslation } from "../i18n/index.jsx";

// Particle Grid with Lines Component
function ParticleGridWave() {
  const pointsRef = useRef(null);
  const linesRef = useRef(null);
  const materialRef = useRef(null);
  const lineMaterialRef = useRef(null);

  // Grid settings - middle ground between previous versions
  const gridSize = 800; // Increased from 230 to 400
  const segments = 256; // Increased from 120 to 160 for more detail
  const spacing = gridSize / segments;

  // Create particle positions and line connections
  const { positions, linePositions, colors, lineColors } = useMemo(() => {
    const positions = new Float32Array((segments + 1) * (segments + 1) * 3);
    const colors = new Float32Array((segments + 1) * (segments + 1) * 3);
    const linePositions = [];
    const lineColors = [];

    let index = 0;

    // Create grid of particles
    for (let i = 0; i <= segments; i++) {
      for (let j = 0; j <= segments; j++) {
        const x = (i - segments / 2) * spacing;
        const z = (j - segments / 2) * spacing;
        const y = 0; // Will be animated

        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;

        // Particle colors (green theme)
        colors[index * 3] = 0.1 + Math.random() * 0.2; // R (low red)
        colors[index * 3 + 1] = 0.8 + Math.random() * 0.2; // G (high green)
        colors[index * 3 + 2] = 0.2 + Math.random() * 0.3; // B (low blue)

        index++;
      }
    }

    // Create line connections between adjacent particles
    for (let i = 0; i <= segments; i++) {
      for (let j = 0; j <= segments; j++) {
        const currentIndex = i * (segments + 1) + j;

        // Connect to right neighbor
        if (j < segments) {
          const rightIndex = i * (segments + 1) + (j + 1);

          // Add line from current to right
          linePositions.push(
            positions[currentIndex * 3],
            positions[currentIndex * 3 + 1],
            positions[currentIndex * 3 + 2],
            positions[rightIndex * 3],
            positions[rightIndex * 3 + 1],
            positions[rightIndex * 3 + 2],
          );

          // Line colors (green theme)
          lineColors.push(0.1, 0.8, 0.2, 0.1, 0.8, 0.2);
        }

        // Connect to bottom neighbor
        if (i < segments) {
          const bottomIndex = (i + 1) * (segments + 1) + j;

          // Add line from current to bottom
          linePositions.push(
            positions[currentIndex * 3],
            positions[currentIndex * 3 + 1],
            positions[currentIndex * 3 + 2],
            positions[bottomIndex * 3],
            positions[bottomIndex * 3 + 1],
            positions[bottomIndex * 3 + 2],
          );

          // Line colors
          lineColors.push(0.1, 0.8, 0.2, 0.1, 0.8, 0.2);
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

  useFrame((state) => {
    if (pointsRef.current && linesRef.current) {
      const time = state.clock.getElapsedTime();
      const pointPositions =
        pointsRef.current.geometry.attributes.position.array;
      const linePositions = linesRef.current.geometry.attributes.position.array;

      // Update particle positions with wave animation
      for (let i = 0; i <= segments; i++) {
        for (let j = 0; j <= segments; j++) {
          const index = i * (segments + 1) + j;
          const x = pointPositions[index * 3];
          const z = pointPositions[index * 3 + 2];

          // Complex wave function - adjusted for scale
          const wave1 = Math.sin(x * 0.03 + time * 1.2) * 6;
          const wave2 = Math.cos(z * 0.025 + time * 0.8) * 4;
          const wave3 = Math.sin((x + z) * 0.015 + time * 1.5) * 3;
          const wave4 = Math.cos(x * 0.035 - z * 0.03 + time * 0.6) * 2;

          pointPositions[index * 3 + 1] = wave1 + wave2 + wave3 + wave4;
        }
      }

      // Update line positions to match particle positions
      let lineIndex = 0;
      for (let i = 0; i <= segments; i++) {
        for (let j = 0; j <= segments; j++) {
          const currentIndex = i * (segments + 1) + j;

          // Update right connection
          if (j < segments) {
            const rightIndex = i * (segments + 1) + (j + 1);

            // Start point
            linePositions[lineIndex * 6] = pointPositions[currentIndex * 3];
            linePositions[lineIndex * 6 + 1] =
              pointPositions[currentIndex * 3 + 1];
            linePositions[lineIndex * 6 + 2] =
              pointPositions[currentIndex * 3 + 2];

            // End point
            linePositions[lineIndex * 6 + 3] = pointPositions[rightIndex * 3];
            linePositions[lineIndex * 6 + 4] =
              pointPositions[rightIndex * 3 + 1];
            linePositions[lineIndex * 6 + 5] =
              pointPositions[rightIndex * 3 + 2];

            lineIndex++;
          }

          // Update bottom connection
          if (i < segments) {
            const bottomIndex = (i + 1) * (segments + 1) + j;

            // Start point
            linePositions[lineIndex * 6] = pointPositions[currentIndex * 3];
            linePositions[lineIndex * 6 + 1] =
              pointPositions[currentIndex * 3 + 1];
            linePositions[lineIndex * 6 + 2] =
              pointPositions[currentIndex * 3 + 2];

            // End point
            linePositions[lineIndex * 6 + 3] = pointPositions[bottomIndex * 3];
            linePositions[lineIndex * 6 + 4] =
              pointPositions[bottomIndex * 3 + 1];
            linePositions[lineIndex * 6 + 5] =
              pointPositions[bottomIndex * 3 + 2];

            lineIndex++;
          }
        }
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry.attributes.position.needsUpdate = true;

      // Animate material properties for futuristic effect
      if (materialRef.current) {
        materialRef.current.size = 0.25 + Math.sin(time * 2) * 0.08;
      }

      if (lineMaterialRef.current) {
        lineMaterialRef.current.opacity = 0.6 + Math.sin(time * 1.5) * 0.2;
      }
    }
  });

  return (
    <group position={[0, -15, -80]}>
      {/* Particle Points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          ref={materialRef}
          size={0.3}
          vertexColors={true}
          transparent={true}
          opacity={0.9}
          sizeAttenuation={true}
        />
      </points>
      {/* Connecting Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={lineColors.length / 3}
            array={lineColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          ref={lineMaterialRef}
          vertexColors={true}
          transparent={true}
          opacity={0.6}
        />
      </lineSegments>
    </group>
  );
}

// Floating Neon Particles
function NeonParticles() {
  const particlesRef = useRef(null);
  const particleCount = 350;

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 350; // Increased spread
      positions[i * 3 + 1] = Math.random() * 60 + 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 350 - 80; // Adjusted to match new grid position

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
        size={0.4}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
}

// Main Scene Component
function FuturisticScene() {
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

      {/* Particle Grid Wave */}
      <ParticleGridWave />

      {/* Floating Neon Particles */}
      <NeonParticles />

      {/* Atmospheric fog - Green tinted */}
      <fog attach="fog" args={["#001100", 40, 200]} />
    </>
  );
}

export default function ForestComponent() {
  const { t } = useTranslation();
  
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-green-900 to-black">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <Canvas
          className="w-full h-full"
          camera={{
            position: [0, -2, 30], fov: 60, near: 0.1, far: 1000
          }}
          gl={{
            alpha: true, antialias: true, powerPreference: "high-performance"
          }}
        >
          <FuturisticScene />
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div
        className="relative container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-6xl text-white"
        style={{
          zIndex: 5, position: "relative", pointerEvents: "none"
        }}
      >
        <div className="relative text-center">
          <h1 className="mb-4 text-4xl font-black text-white lg:text-6xl drop-shadow-lg">
            {t('hero.title1')}{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {t('common.fullName')}
            </span>{" "}
            {t('hero.title2')}
          </h1>
          <p className="mx-auto text-lg/relaxed font-medium text-slate-200 lg:w-2/3 lg:text-xl/relaxed drop-shadow-md">
            {t('hero.description')}
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col justify-center gap-2 pt-8 pb-16 sm:flex-row sm:items-center sm:gap-3"
            style={{ pointerEvents: "auto" }}
          >
            <a
              href="#timeline"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-green-400 bg-green-400/20 backdrop-blur-sm px-5 py-2.5 text-sm leading-6 font-semibold text-green-300 hover:border-green-300 hover:bg-green-400/30 focus:ring-3 focus:ring-green-400/50 transition-all duration-300"
            >
              <span>{t('hero.cta')}</span>
            </a>
            <a
              href="#blog"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm leading-6 font-semibold text-white hover:text-cyan-300 hover:bg-white/20 hover:shadow-lg transition-all duration-300"
            >
              <span>{t('hero.ctaSecondary')}</span>
            </a>
          </div>

          {/* Cards */}
          <div
            className="group relative flex items-center justify-center gap-2 sm:gap-10"
            style={{ zIndex: 15, pointerEvents: "auto" }}
          >
            <div className="w-full max-w-80 rotate-12 rounded-2xl bg-green-400/10 backdrop-blur-md border border-green-400/20 p-2.5 shadow-2xl hover:bg-green-400/20 transition-all duration-500 hover:scale-105">
              <img
                src="/ide_dude.png?height=400&width=300"
                className="aspect-3/4 w-full rounded-xl object-cover"
                alt={t('hero.cards.ide')}
              />
            </div>
            <div className="mt-5 w-full max-w-80 rounded-2xl bg-emerald-400/10 backdrop-blur-md border border-emerald-400/20 p-2.5 shadow-2xl hover:bg-emerald-400/20 transition-all duration-500 hover:scale-105">
              <img
                src="/hand_with_iphone.jpg?height=400&width=300"
                className="aspect-3/4 w-full rounded-xl object-cover"
                alt={t('hero.cards.mobile')}
              />
            </div>
            <div className="w-full max-w-80 -rotate-12 rounded-2xl bg-lime-400/10 backdrop-blur-md border border-lime-400/20 p-2.5 shadow-2xl hover:bg-lime-400/20 transition-all duration-500 hover:scale-105">
              <img
                src="/vr_headset.jpg?height=400&width=300"
                className="aspect-3/4 w-full rounded-xl object-cover"
                alt={t('hero.cards.vr')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
