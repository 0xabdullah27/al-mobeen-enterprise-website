"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

export default function ThreeCanvasOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xff6b00, 2.5);
    dirLight1.position.set(10, 10, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0284c7, 2.5);
    dirLight2.position.set(-10, -10, -10);
    scene.add(dirLight2);

    // 3. Right Margin 3D Floating Drum (Positioned far right outside container)
    const drumGroup = new THREE.Group();

    const drumGeo = new THREE.CylinderGeometry(0.9, 0.9, 1.8, 32);
    const drumMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.15,
    });
    const drumMesh = new THREE.Mesh(drumGeo, drumMat);
    drumGroup.add(drumMesh);

    // Drum ribs
    const ringGeo = new THREE.TorusGeometry(0.93, 0.04, 16, 32);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xff6b00,
      metalness: 0.9,
      roughness: 0.1,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 2;
    ring1.position.y = 0.45;
    drumGroup.add(ring1);

    const ring2 = ring1.clone();
    ring2.position.y = -0.45;
    drumGroup.add(ring2);

    // Outer Wireframe Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    drumGroup.add(cageMesh);

    // Place strictly on FAR RIGHT MARGIN (X = 13.5)
    drumGroup.position.set(13.5, 3, 0);
    scene.add(drumGroup);

    // 4. Left Margin 3D Floating Crystal (Positioned far left outside container)
    const crystalGeo = new THREE.OctahedronGeometry(1.2, 0);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      metalness: 0.7,
      roughness: 0.2,
      wireframe: true,
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    crystalMesh.position.set(-13.5, -2, 0);
    scene.add(crystalMesh);

    // 5. Mouse Parallax & GSAP Scroll Translation
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight || 1;
      const progress = scrollY / maxScroll;

      // GSAP smooth 3D rotation & scroll translation down far screen margins
      gsap.to(drumGroup.rotation, {
        x: progress * Math.PI * 4,
        y: progress * Math.PI * 6,
        duration: 0.4,
        ease: "power1.out",
      });

      gsap.to(drumGroup.position, {
        y: 3 - progress * 16,
        duration: 0.4,
        ease: "power1.out",
      });

      gsap.to(crystalMesh.rotation, {
        x: -progress * Math.PI * 5,
        z: progress * Math.PI * 3,
        duration: 0.4,
        ease: "power1.out",
      });

      gsap.to(crystalMesh.position, {
        y: -2 - progress * 14,
        duration: 0.4,
        ease: "power1.out",
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 6. Continuous Idle Animation
    let animId: number;
    const animate = () => {
      drumGroup.rotation.y += 0.01;
      cageMesh.rotation.x += 0.006;
      crystalMesh.rotation.y += 0.008;

      scene.rotation.y = mouseX * 0.05;
      scene.rotation.x = -mouseY * 0.05;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    // 7. Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden hidden xl:block"
      style={{ opacity: 0.95 }}
    />
  );
}
