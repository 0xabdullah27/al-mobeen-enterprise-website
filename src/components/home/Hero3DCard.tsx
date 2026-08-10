"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";
import { products } from "@/data/products";
import { useQuote } from "@/components/QuoteProvider";
import { useToast } from "@/components/ui/Toast";

export default function Hero3DCard() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem, isInQuote } = useQuote();
  const { showToast } = useToast();

  const { scrollY } = useScroll();
  const rotateYScroll = useTransform(scrollY, [0, 600], [0, Math.PI * 2]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.offsetWidth;
    const height = mount.offsetHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x06b6d4, 2);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x3b82f6, 2);
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    // 3D Drum Object
    const drumGroup = new THREE.Group();

    const drumGeo = new THREE.CylinderGeometry(1.2, 1.2, 2.4, 32);
    const drumMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.8,
      roughness: 0.2,
    });
    const drumMesh = new THREE.Mesh(drumGeo, drumMat);
    drumGroup.add(drumMesh);

    // Ribs
    const ringGeo = new THREE.TorusGeometry(1.23, 0.05, 16, 32);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.9,
      roughness: 0.1,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 2;
    ring1.position.y = 0.6;
    drumGroup.add(ring1);

    const ring2 = ring1.clone();
    ring2.position.y = -0.6;
    drumGroup.add(ring2);

    // Molecular Wireframe Ring
    const wireGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    drumGroup.add(wireMesh);

    scene.add(drumGroup);

    let animId: number;
    const animate = () => {
      drumGroup.rotation.y += 0.01;
      wireMesh.rotation.x += 0.005;
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      const w = mount.offsetWidth;
      const h = mount.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const featured = products.filter((p) => p.bestSeller).slice(0, 4);
  const searchResults = searchQuery.trim()
    ? products.filter((p) =>
        p.displayName.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : featured;

  const handleAdd = (p: typeof products[0]) => {
    addItem(p.slug, p.displayName, p.category);
    showToast(`${p.displayName} added to Quote List`);
  };

  return (
    <div className="rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-xl relative overflow-hidden">
      {/* Embedded 3D Canvas Box inside card header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-accent block mb-1">
            Bulk Spec Visualizer
          </span>
          <h3 className="text-lg font-extrabold text-ink">
            Industrial Drum & Spec Finder
          </h3>
          <p className="text-xs text-neutral">
            Jodia Trading Desk Stock
          </p>
        </div>

        {/* 3D WebGL Canvas strictly framed inside this container */}
        <div
          ref={mountRef}
          className="w-32 h-32 rounded-2xl bg-base border border-border relative shrink-0"
        />
      </div>

      {/* Quick Search Input */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search e.g. DOP, Titanium, Xylene, MEG..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-border bg-base text-ink focus:outline-none focus:ring-2 focus:ring-accent/30 font-medium"
        />
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      {/* Items list */}
      <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
        {searchResults.map((p) => {
          const added = isInQuote(p.slug);
          return (
            <div
              key={p.slug}
              className="p-3 rounded-xl border border-border bg-base flex items-center justify-between text-xs hover:border-primary transition-colors"
            >
              <div>
                <p className="font-bold text-ink">{p.displayName}</p>
                <p className="text-[10px] text-neutral">
                  {p.packaging} • {p.grade}
                </p>
              </div>
              <button
                onClick={() => handleAdd(p)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-extrabold shrink-0 transition-colors ${
                  added
                    ? "bg-success text-inverse-ink"
                    : "bg-accent text-inverse-ink hover:bg-accent-hover"
                }`}
              >
                {added ? "✓ Added" : "+ Quote"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
