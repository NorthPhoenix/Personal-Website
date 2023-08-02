"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { twMerge } from "tailwind-merge";
import { Suspense, useEffect } from "react";

type About3DProps = {
  className?: string;
  onLoad?: () => void;
};

const About3D: React.FC<About3DProps> = ({ className, onLoad }) => {
  useEffect(() => {
    // console.log("WhiteCubes3D useEffect");
    onLoad?.();
  }, []);

  return (
    <div className={twMerge("", className)}>
      <Canvas shadows frameloop='demand' camera={{ position: [0, 2, 8] }}>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <axesHelper args={[5]} />
          {/* ####################### Lights ####################### */}
          {/* Key light */}
          <directionalLight position={[10, 15, 5]} intensity={0.5} />
          {/* Fill light */}
          <directionalLight position={[-10, 5, 0]} intensity={0.3} />
          {/* Rim light */}
          <directionalLight position={[0, 0, -10]} intensity={0.2} />
          {/* ambient light */}
          <ambientLight intensity={0.1} />
          {/* Center point light */}
          {/* <pointLight position={[0, 0, 0]} intensity={0.4} /> */}
          {/* ####################### Meshes ####################### */}
          {/* bottom left */}
          <mesh position={[0, 0, 0]} scale={5}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color='white' />
          </mesh>
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default About3D;
