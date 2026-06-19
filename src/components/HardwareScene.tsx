"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const PURPLE = "#BF5AF2";

function NexusAppliance() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35;
    }
  });

  const finPositions = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        x: -1.05 + i * 0.16,
        height: 0.18 + (i % 3) * 0.04,
      })),
    []
  );

  return (
    <group ref={groupRef} position={[0, -0.15, 0]}>
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.6, 0.62, 1.75]} />
        <meshStandardMaterial color="#080808" metalness={0.92} roughness={0.28} />
      </mesh>

      <mesh castShadow position={[0, 0.36, 0]}>
        <boxGeometry args={[2.45, 0.08, 1.6]} />
        <meshStandardMaterial color="#111111" metalness={0.85} roughness={0.4} />
      </mesh>

      {finPositions.map((fin) => (
        <mesh
          key={fin.x}
          castShadow
          position={[fin.x, 0.36 + fin.height / 2, 0]}
        >
          <boxGeometry args={[0.04, fin.height, 1.45]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.22} />
        </mesh>
      ))}

      <mesh position={[0, 0.02, 0.88]}>
        <boxGeometry args={[2.1, 0.06, 0.04]} />
        <meshStandardMaterial
          color={PURPLE}
          emissive={PURPLE}
          emissiveIntensity={2.5}
          metalness={0.2}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[-1.05, -0.02, -0.55]}>
        <boxGeometry args={[0.35, 0.12, 0.35]} />
        <meshStandardMaterial color="#050505" metalness={0.8} roughness={0.5} />
      </mesh>

      <mesh position={[1.05, -0.02, -0.55]}>
        <boxGeometry args={[0.35, 0.12, 0.35]} />
        <meshStandardMaterial color="#050505" metalness={0.8} roughness={0.5} />
      </mesh>

      {[-0.35, 0, 0.35].map((x) => (
        <mesh key={x} position={[x, -0.08, -0.72]}>
          <cylinderGeometry args={[0.045, 0.045, 0.08, 16]} />
          <meshStandardMaterial
            color={PURPLE}
            emissive={PURPLE}
            emissiveIntensity={1.2}
            metalness={0.4}
            roughness={0.35}
          />
        </mesh>
      ))}

      <mesh position={[0, -0.38, 0]} receiveShadow>
        <boxGeometry args={[3.2, 0.06, 2.2]} />
        <meshStandardMaterial color="#030303" metalness={0.7} roughness={0.6} />
      </mesh>

      <pointLight position={[0, 0.5, 1.2]} intensity={8} color={PURPLE} distance={4} />
      <pointLight position={[-2, 1.5, -1]} intensity={12} color="#ffffff" distance={6} />
      <pointLight position={[2, 0.5, 2]} intensity={6} color="#8866ff" distance={5} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 6, 14]} />
      <ambientLight intensity={0.25} />
      <directionalLight
        castShadow
        intensity={1.4}
        position={[4, 6, 3]}
        shadow-mapSize={[1024, 1024]}
      />
      <NexusAppliance />
      <ContactShadows
        position={[0, -0.42, 0]}
        opacity={0.55}
        scale={8}
        blur={2.5}
        far={4}
      />
      <Environment preset="city" />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 2.1}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </>
  );
}

export function HardwareScene() {
  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto lg:max-w-none">
      <div className="absolute -inset-4 border border-neon-purple/20" />
      <div className="absolute -inset-8 border border-white/5" />

      <div className="relative flex h-full min-h-[320px] flex-col border-industrial bg-black sm:min-h-[420px]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[10px] tracking-widest text-white/40">
          <span>RENDER // CURXOR-NEXUS-V1</span>
          <span className="text-neon-purple">● LIVE</span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 grid-industrial opacity-40" />
          <Canvas
            shadows
            camera={{ position: [2.8, 1.6, 3.2], fov: 42 }}
            gl={{ antialias: true, alpha: true }}
            className="!absolute inset-0"
          >
            <Scene />
          </Canvas>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neon-purple/5 via-transparent to-neon-purple/10" />
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
            <div className="h-px w-full bg-neon-purple/50 animate-scan-line" />
          </div>
        </div>

        <div className="flex justify-between border-t border-white/10 px-4 py-2 text-[10px] tracking-widest text-white/30">
          <span>ROT: AUTO</span>
          <span>DRAG: ORBIT</span>
          <span>MESH: NEXUS-01</span>
        </div>
      </div>
    </div>
  );
}
