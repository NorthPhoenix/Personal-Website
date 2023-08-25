"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload } from "@react-three/drei"
import { twMerge } from "tailwind-merge"
import { Suspense } from "react"
import { Vector3, Color } from "@react-three/fiber"

type CubeProps = {
  position?: Vector3
  size?: [x: number, y: number, z: number] | number
  color?: Color
}

const Cube: React.FC<CubeProps> = ({
  position = [0, 0, 0],
  color = "#ffffff",
  size = 1,
}) => {
  return (
    <mesh position={position}>
      <boxGeometry
        args={typeof size === "number" ? [size, size, size] : size}
      />
      <meshLambertMaterial color={color} />
    </mesh>
  )
}

type WhiteCubes3DProps = {
  className?: string
  onLoad?: () => void
}

const Cubes3D: React.FC<WhiteCubes3DProps> = ({ className, onLoad }) => {
  return (
    <div className={twMerge("", className)}>
      <Canvas
        shadows
        frameloop='demand'
        camera={{ position: [0, 2, 8] }}
        onCreated={onLoad}>
        <Suspense fallback={null}>
          <OrbitControls />
          {/* <axesHelper args={[5]} /> */}
          {/* ####################### Lights ####################### */}
          {/* Key light */}
          <directionalLight position={[10, 15, 5]} intensity={0.5} />
          {/* Fill light */}
          <directionalLight position={[-10, 5, 0]} intensity={0.3} />
          {/* Rim light */}
          <directionalLight position={[0, 0, -10]} intensity={0.2} />
          {/* ambient light */}
          {/* <ambientLight intensity={0.1} /> */}
          {/* Center point light */}
          <pointLight position={[0, 0, 0]} intensity={0.4} />
          {/* ####################### Cubes ####################### */}
          {/* bottom left */}
          <Cube position={[-8, -2, 1]} size={3.5} />
          {/* right */}
          <Cube position={[6, -2, 0]} />
          {/* top left */}
          <Cube position={[-6, 6.5, -4]} size={0.5} />
          {/* top middle */}
          <Cube position={[5, 5, -7]} />
          {/* top right */}
          <Cube position={[18, 5, -10]} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Cubes3D
