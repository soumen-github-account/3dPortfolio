import React, { Suspense, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Logo image URLs
const logoUrls = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
];

// Position logos evenly in a sphere
const sphericalPositions = (count, radius = 4) =>
  Array.from({ length: count }, (_, i) => {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    return [
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi),
    ];
  });

// Component to display all logo sprites
const LogoSprites = () => {
  const textures = useLoader(THREE.TextureLoader, logoUrls);
  const positions = useMemo(() => sphericalPositions(textures.length), [textures.length]);

  return (
    <>
      {textures.map((texture, idx) => (
        <sprite key={idx} position={positions[idx]}>
          <spriteMaterial attach="material" map={texture} />
        </sprite>
      ))}
    </>
  );
};

// Main scene
export default function LogoSphere() {
  return ( 
    <div className="w-[40vw] min-h-[50vh]">
      <div className="w-[40vw] h-[45vh] absolute top-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls autoRotate enableZoom={false} />
        <Suspense fallback={null}>
          <LogoSprites />
        </Suspense>
      </Canvas>
    </div>
    </div>
  );
}
