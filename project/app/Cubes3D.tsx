"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { twMerge } from "tailwind-merge";
import { Suspense, useEffect } from "react";
import { Vector3, Color } from "@react-three/fiber";

type CubeProps = {
    position?: Vector3;
    color?: Color;
};

type WhiteCubes3DProps = {
    className?: string;
    onLoad?: () => void;
};

const Cube: React.FC<CubeProps> = ({
    position = [0, 0, 0],
    color = "#ffffff",
}) => {
    return (
        <mesh position={position}>
            <boxGeometry />
            <meshLambertMaterial color={color} />
        </mesh>
    );
};

const Cubes3D: React.FC<WhiteCubes3DProps> = ({ className, onLoad }) => {
    useEffect(() => {
        // console.log("WhiteCubes3D useEffect");
        onLoad?.();
    }, []);

    return (
        <div className={twMerge("text-5xl text-white", className)}>
            <Canvas shadows frameloop='demand' camera={{ position: [0, 2, 8] }}>
                <Suspense fallback={null}>
                    <OrbitControls />
                    {/* <axesHelper args={[5]} /> */}
                    {/* Key light */}
                    <directionalLight position={[10, 15, 5]} intensity={0.5} />
                    {/* Fill light */}
                    <directionalLight position={[-10, 5, 0]} intensity={0.3} />
                    {/* Rim light */}
                    <directionalLight position={[0, 0, -10]} intensity={0.2} />
                    {/* ambient light */}
                    <ambientLight intensity={0.05} />
                    <Cube position={[2, -3, 2]} />
                    <Cube position={[8, -4, -4]} color={"purple"} />
                    <Cube position={[-6, 6, -4]} color={"blue"} />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Cubes3D;
