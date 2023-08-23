"use client"

import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { OrbitControls, Preload } from "@react-three/drei"
import { Suspense, useEffect, useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useSetAtom } from "jotai"
import { aboutLoadedAtom } from "lib/state"

type About3DProps = {
  className?: string
}

const Model: React.FC = () => {
  const model = useLoader(GLTFLoader, "/models/Laiky.glb")
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.1
  })
  return (
    <primitive
      ref={meshRef}
      object={model.scene}
      scale={5}
      position={[0, 0, 0]}
    />
  )
}

const About3D: React.FC<About3DProps> = ({ className }) => {
  const setAboutLoaded = useSetAtom(aboutLoadedAtom)

  return (
    <Canvas
      className={className}
      shadows
      frameloop='always'
      camera={{ position: [0, 2, 8] }}
      onCreated={() => setAboutLoaded(true)}>
      <Suspense fallback={null}>
        <axesHelper args={[5]} />
        <Model />
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
        <OrbitControls enableZoom={false} />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default About3D
