'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

export default function About3D() {
  const panelRef = useRef<THREE.Group>(null);
  const codeLinesRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (panelRef.current) {
      panelRef.current.rotation.y += delta * 0.25;
    }
    if (codeLinesRef.current) {
      const t = state.clock.getElapsedTime();
      codeLinesRef.current.position.y = 0.35 + Math.sin(t * 2.0) * 0.02;
    }
  });

  return (
    <group position={[0, -7.8, 0]}>
      {/* Floating Developer Desk Platform */}
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.25}>
        <group position={[0, 0, 0]}>
          {/* Desk Surface */}
          <mesh position={[0, -0.1, 0]}>
            <boxGeometry args={[2.8, 0.1, 1.6]} />
            <meshStandardMaterial color="#0b1329" metalness={0.8} roughness={0.25} />
          </mesh>
          <lineSegments position={[0, -0.1, 0]}>
            <edgesGeometry args={[new THREE.BoxGeometry(2.81, 0.11, 1.61)]} />
            <lineBasicMaterial color="#38bdf8" transparent opacity={0.6} />
          </lineSegments>

          {/* Procedural Laptop */}
          <group position={[-0.4, 0.02, 0.1]}>
            {/* Laptop Base */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.9, 0.03, 0.6]} />
              <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
            </mesh>
            {/* Keyboard indentation */}
            <mesh position={[0, 0.016, 0.05]}>
              <planeGeometry args={[0.75, 0.38]} />
              <meshBasicMaterial color="#020617" />
            </mesh>
            {/* Screen Hinge & Display */}
            <group position={[0, 0.02, -0.28]} rotation={[0.2, 0, 0]}>
              <mesh position={[0, 0.35, 0]}>
                <boxGeometry args={[0.9, 0.65, 0.03]} />
                <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.2} />
              </mesh>
              {/* Screen Display with Code Glow */}
              <mesh ref={codeLinesRef} position={[0, 0.35, 0.02]}>
                <planeGeometry args={[0.82, 0.57]} />
                <meshBasicMaterial color="#070d1a" />
              </mesh>
              <Text
                position={[-0.35, 0.55, 0.025]}
                fontSize={0.04}
                color="#38bdf8"
                anchorX="left"
                anchorY="top"
              >
                {`const engineer = {\n  name: 'Renuka',\n  stack: 'Full-Stack + AI',\n  status: 'Ready to Ship'\n};`}
              </Text>
            </group>
          </group>

          {/* Coffee Mug */}
          <group position={[0.7, 0.15, 0.3]}>
            <mesh>
              <cylinderGeometry args={[0.1, 0.09, 0.22, 16]} />
              <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.3} />
            </mesh>
            <mesh position={[0.12, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <torusGeometry args={[0.07, 0.02, 8, 16, Math.PI]} />
              <meshStandardMaterial color="#1e293b" />
            </mesh>
          </group>

          {/* Plant in Geometric Pot */}
          <group position={[0.8, 0.2, -0.4]}>
            <mesh>
              <cylinderGeometry args={[0.15, 0.1, 0.25, 6]} />
              <meshStandardMaterial color="#047857" metalness={0.4} roughness={0.6} />
            </mesh>
            {/* Plant leaf cluster */}
            <mesh position={[0, 0.2, 0]}>
              <dodecahedronGeometry args={[0.14, 0]} />
              <meshStandardMaterial color="#10b981" roughness={0.4} />
            </mesh>
          </group>
        </group>
      </Float>

      {/* Orbiting Glass Credentials & Education Panels */}
      <group ref={panelRef} position={[0, 0.8, 0]}>
        {/* Panel 1: B.Tech CSE (AI) */}
        <group position={[1.9, 0, 0]}>
          <mesh>
            <boxGeometry args={[1.2, 0.7, 0.04]} />
            <meshStandardMaterial
              color="#0f172a"
              metalness={0.7}
              roughness={0.2}
              transparent
              opacity={0.85}
            />
          </mesh>
          <lineSegments position={[0, 0, 0.025]}>
            <edgesGeometry args={[new THREE.BoxGeometry(1.21, 0.71, 0.01)]} />
            <lineBasicMaterial color="#10b981" />
          </lineSegments>
          <Text
            position={[0, 0.12, 0.03]}
            fontSize={0.065}
            color="#10b981"
            anchorX="center"
            anchorY="middle"
          >
            B.TECH CSE (AI)
          </Text>
          <Text
            position={[0, -0.05, 0.03]}
            fontSize={0.075}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            88% DISTINCTION
          </Text>
          <Text
            position={[0, -0.2, 0.03]}
            fontSize={0.045}
            color="#94a3b8"
            anchorX="center"
            anchorY="middle"
          >
            G. Pullaiah College
          </Text>
        </group>

        {/* Panel 2: Verified Certifications */}
        <group position={[-1.9, 0, 0]}>
          <mesh>
            <boxGeometry args={[1.3, 0.7, 0.04]} />
            <meshStandardMaterial
              color="#0f172a"
              metalness={0.7}
              roughness={0.2}
              transparent
              opacity={0.85}
            />
          </mesh>
          <lineSegments position={[0, 0, 0.025]}>
            <edgesGeometry args={[new THREE.BoxGeometry(1.31, 0.71, 0.01)]} />
            <lineBasicMaterial color="#38bdf8" />
          </lineSegments>
          <Text
            position={[0, 0.15, 0.03]}
            fontSize={0.06}
            color="#38bdf8"
            anchorX="center"
            anchorY="middle"
          >
            AWS CLOUD PRACTITIONER
          </Text>
          <Text
            position={[0, 0.0, 0.03]}
            fontSize={0.06}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            SMART CODER (DSA)
          </Text>
          <Text
            position={[0, -0.15, 0.03]}
            fontSize={0.055}
            color="#a78bfa"
            anchorX="center"
            anchorY="middle"
          >
            FULL STACK (MAKE SKILLED)
          </Text>
        </group>
      </group>
    </group>
  );
}
