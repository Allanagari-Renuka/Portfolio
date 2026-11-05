'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { easing } from 'maath';

export default function CameraRig() {
  const scroll = useScroll();
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  // The 3D camera travel path across the 7 stations
  const pathCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.8, 6.2),    // 0.00: Station 1 - Hero
      new THREE.Vector3(1.2, -7.0, 5.8),  // 0.16: Station 2 - About
      new THREE.Vector3(-1.0, -15.0, 6.4),// 0.33: Station 3 - Skills
      new THREE.Vector3(0, -23.0, 6.2),   // 0.50: Station 4 - Skipp
      new THREE.Vector3(1.0, -31.0, 6.0), // 0.66: Station 5 - Projects
      new THREE.Vector3(-0.8, -39.0, 6.2),// 0.83: Station 6 - Experience
      new THREE.Vector3(0, -47.0, 5.8),   // 1.00: Station 7 - Contact
    ]);
  }, []);

  // Look-at focal point path
  const targetCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),       // Hero look-at
      new THREE.Vector3(0, -7.8, 0),    // About desk look-at
      new THREE.Vector3(0, -15.8, 0),   // Skills tokens look-at
      new THREE.Vector3(0, -23.6, 0),   // Skipp phones look-at
      new THREE.Vector3(0, -31.6, 0),   // Projects gallery look-at
      new THREE.Vector3(0, -39.6, 0),   // Experience road look-at
      new THREE.Vector3(0, -47.6, 0),   // Contact torus-knot look-at
    ]);
  }, []);

  useFrame((state, delta) => {
    // Current scroll offset (0 to 1)
    const t = Math.max(0, Math.min(1, scroll.offset));

    // Get smooth point on camera path
    const targetCamPos = pathCurve.getPointAt(t);

    // Apply mouse parallax
    const parallaxX = state.pointer.x * 0.35;
    const parallaxY = state.pointer.y * 0.25;

    easing.damp3(
      state.camera.position,
      [targetCamPos.x + parallaxX, targetCamPos.y + parallaxY, targetCamPos.z],
      0.3,
      delta
    );

    // Smooth focal target
    const currentLook = targetCurve.getPointAt(t);
    easing.damp3(targetLookAt.current, [currentLook.x, currentLook.y, currentLook.z], 0.3, delta);

    state.camera.lookAt(targetLookAt.current);
  });

  return null;
}
