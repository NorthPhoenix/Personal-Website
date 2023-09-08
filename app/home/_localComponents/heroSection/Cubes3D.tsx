"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload } from "@react-three/drei"
import { twMerge } from "tailwind-merge"
import { Suspense } from "react"
import { Vector3, Color } from "@react-three/fiber"
import { useAtomValue } from "jotai"
import { screenSizeAtom } from "lib/state"

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
  const screenSize = useAtomValue(screenSizeAtom)

  return (
    <div className={twMerge("", className)}>
      <Canvas
        shadows
        frameloop='demand'
        camera={{ position: [0, 2, 8] }}
        onCreated={onLoad}>
        <Suspense fallback={null}>
          <OrbitControls />
          <axesHelper args={[5]} />
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
          <Cube
            position={
              screenSize === "xs"
                ? [-4, -2, 1]
                : screenSize === "sm"
                ? [-5, -2, 1]
                : screenSize === "md"
                ? [-6, -2, 1]
                : screenSize === "lg"
                ? [-7, -2, 1]
                : [-8, -2, 1]
            }
            size={screenSize === "xs" || screenSize === "sm" ? 3 : 3.5}
          />
          {/* right */}
          <Cube
            position={
              screenSize === "xs"
                ? [2.5, -2, 0]
                : screenSize === "sm"
                ? [3, -2, 0]
                : screenSize === "md"
                ? [4, -2, 0]
                : screenSize === "lg"
                ? [5, -2, 0]
                : [6, -2, 0]
            }
            size={screenSize === "xs" || screenSize === "sm" ? 0.8 : 1}
          />
          {/* top left */}
          <Cube
            position={
              screenSize === "xs"
                ? [-2.5, 6.5, -4]
                : screenSize === "sm"
                ? [-3, 6.5, -4]
                : screenSize === "md"
                ? [-4, 6.2, -4]
                : screenSize === "lg"
                ? [-5, 6.2, -4]
                : [-6, 6.2, -4]
            }
            size={0.5}
          />
          {/* top middle */}
          <Cube
            position={
              screenSize === "xs"
                ? [1.5, 5, -7]
                : screenSize === "sm"
                ? [2, 5, -7]
                : screenSize === "md"
                ? [3, 5, -7]
                : screenSize === "lg"
                ? [4, 5, -7]
                : [5, 5, -7]
            }
          />
          {/* top right */}
          <Cube
            position={
              screenSize === "xs"
                ? [7, 3, -10]
                : screenSize === "sm"
                ? [9.5, 3.5, -10]
                : screenSize === "md"
                ? [12, 4, -10]
                : screenSize === "lg"
                ? [15, 4.3, -10]
                : [18, 5, -10]
            }
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Cubes3D
