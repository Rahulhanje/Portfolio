"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const StarBackground = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const numStars = 750; // Reduced number of stars

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Ensure mountRef.current is not null before appending the renderer's DOM element
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create star geometry
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.002 });
    const positions = new Float32Array(numStars * 3);

    for (let i = 0; i < numStars; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2; // X position
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2; // Y position
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2; // Z position
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.001; // Slowed down the rotation speed
      stars.rotation.y += 0.001; // Slowed down the rotation speed
      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-auto fixed inset-0 z-[20]" ref={mountRef} />
  );
};

export default StarBackground;