"use client";

import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type About3DProps = {
  className?: string;
  onLoad?: () => void;
};

const Model: React.FC = () => {
  const model = useLoader(GLTFLoader, "/models/Laiky.glb");
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
  });
  return (
    <primitive
      ref={meshRef}
      object={model.scene}
      scale={5}
      position={[0, 0, 0]}
    />
  );
};

const About3D: React.FC<About3DProps> = ({ className, onLoad }) => {
  useEffect(() => {
    // console.log("About3D useEffect");
    onLoad?.();
  }, []);

  return (
    <Canvas shadows frameloop='always' camera={{ position: [0, 2, 8] }}>
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
        {/* ####################### Models ####################### */}
        <Model />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default About3D;
