"use client";

import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { Canvas, useLoader, GroupProps } from "@react-three/fiber";
import { SVGLoader, SVGResult } from "three/examples/jsm/loaders/SVGLoader";
import { ArcballControls, PerspectiveCamera } from "@react-three/drei";
import {
  useRef,
  useState,
  Suspense,
  useEffect,
  useReducer,
  useLayoutEffect,
} from "react";
import Image from "next/image";
import { skills as skillList, Skill } from "utils/skillsConfig";

type Skills3DProps = {
  className?: string;
  activateSkill: (skill: Skill) => void;
};

const Skills3D = ({ className, activateSkill }: Skills3DProps) => {
  return (
    <div className={className !== undefined ? className : ""}>
      <Image
        src='/images/drag-and-drop.png'
        alt='drag and drop'
        width={48}
        height={48}
        className='absolute bottom-[5%] left-[20%]'
      />
      <Canvas shadows='soft' frameloop='always'>
        <Suspense fallback={null}>
          <SkillsMesh setActiveSkill={activateSkill} />
          <PerspectiveCamera makeDefault position={[0, 0, 70]}>
            <directionalLight
              position={[10, 15, 7]}
              intensity={0.3}
              castShadow
            />
            <directionalLight
              position={[10, 15, -7]}
              intensity={0.3}
              castShadow
            />
            <directionalLight
              position={[-10, 15, 0]}
              intensity={0.3}
              castShadow
            />
            <directionalLight
              position={[0, -10, 0]}
              intensity={0.3}
              castShadow
            />
          </PerspectiveCamera>
          {/* <axesHelper args={[20]} /> */}
          <ambientLight intensity={0.1} />
          <ArcballControls
            enableZoom={false}
            enablePan={false}
            // dampingFactor={10}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

type SkillsMeshProps = {
  setActiveSkill: (skill: Skill) => void;
};

const SkillsMesh = ({ setActiveSkill }: SkillsMeshProps) => {
  const sphereRadius = 20;

  const skillsRef = useRef<THREE.Group>(null!);
  const [skills, setSkills] = useState(skillList);
  const [canAnimateSkills, setCanAnimateSkills] = useState(false);

  const [animationReadyState, dispatch] = useReducer(reducer, null!);

  function reducer(
    state: { [key: number]: boolean } | null,
    action: number | "init"
  ) {
    if (action === "init") {
      let newState: { [key: number]: boolean } = {};
      skillsRef.current.children.forEach((_, index) => {
        newState[index] = false;
      });
      return newState;
    }
    return { ...state, [action]: true };
  }

  useEffect(() => {
    if (animationReadyState === null) return;
    if (Object.values(animationReadyState).every((val) => val === true)) {
      setCanAnimateSkills(true);
    }
  }, [animationReadyState]);

  return (
    <motion.group
      animate={{
        rotateX: 2 * Math.PI,
        rotateY: 2 * Math.PI,
        rotateZ: 2 * Math.PI,
      }}
      transition={{
        delay: 1,
        repeat: Infinity,
        repeatType: "loop",
        type: "tween",
        ease: "linear",
        duration: 60,
      }}>
      <group
        ref={skillsRef}
        position={[0, 0, 0]}
        onAfterRender={() => {
          dispatch("init");
        }}>
        {skills
          .filter((skill) => skill.icon.svg !== undefined)
          .map((skill, index, list) => {
            /* https://stackoverflow.com/questions/9600801/evenly-distributing-n-points-on-a-sphere
             * Calculate the position of each skill cube on the sphere
             */
            const phi = Math.acos(1 - (2 * (index + 0.5)) / list.length);
            const theta = Math.PI * (1 + Math.sqrt(5)) * index;
            const x = Math.cos(theta) * Math.sin(phi);
            const y = Math.sin(theta) * Math.sin(phi);
            const z = Math.cos(phi);
            return (
              <SkillCube
                position={[
                  x * sphereRadius,
                  y * sphereRadius,
                  z * sphereRadius,
                ]}
                receiveShadow
                castShadow
                skill={skill}
                svgPath={skill.icon.svg!}
                myID={index}
                canAnimateDispatch={dispatch}
                setActiveSkill={setActiveSkill}
                key={index}
              />
            );
          })}
      </group>
    </motion.group>
  );
};

type SkillCubeProps = GroupProps & {
  svgPath: string;
  myID?: number;
  skill?: Skill;
  canAnimateDispatch?: React.Dispatch<number>;
  setActiveSkill?: (skill: Skill) => void;
};
const SkillCube = ({
  svgPath,
  myID,
  skill,
  canAnimateDispatch,
  setActiveSkill,
  scale,
  position,
  rotation,
  castShadow,
  receiveShadow,
}: SkillCubeProps) => {
  const svg = useLoader(SVGLoader, svgPath);
  const [cubeHover, setCubeHover] = useState(false);
  const [canAnimateGroup, setCanAnimateGroup] = useState(false);
  const [canAnimateEach, dispatch] = useReducer(reducer, {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  function reducer(
    state: {
      0: boolean;
      1: boolean;
      2: boolean;
      3: boolean;
      4: boolean;
      5: boolean;
    },
    action: number
  ) {
    return { ...state, [action]: true };
  }

  useEffect(() => {
    if (Object.values(canAnimateEach).every((val) => val === true)) {
      canAnimateDispatch?.(myID!);
      setCanAnimateGroup(true);
    }
  }, [canAnimateEach]);

  const materialVarients = {
    default: { color: "#a09b85" },
    hover: { color: "#8c866e" },
  };

  return (
    <motion.group
      {...{ scale, position, rotation, castShadow, receiveShadow }}
      whileHover={{ scale: 1.2 }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setCubeHover(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setCubeHover(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        setActiveSkill?.(skill!);
      }}>
      <mesh receiveShadow castShadow position={[0, 0, 0]}>
        <boxGeometry args={[5.9, 5.9, 5.9]} />
        <motion.meshPhongMaterial
          variants={materialVarients}
          animate={cubeHover ? "hover" : "default"}
        />
      </mesh>
      <SkillSVG
        myID={0}
        position={[0, 0, 3]}
        rotation={[Math.PI, 0, 0]}
        scale={0.04}
        loadedSVG={svg}
        canAnimateDispatch={dispatch}
      />
      <SkillSVG
        myID={1}
        position={[0, 0, -3]}
        rotation={[0, 0, Math.PI]}
        scale={0.04}
        loadedSVG={svg}
        canAnimateDispatch={dispatch}
      />
      <SkillSVG
        myID={2}
        position={[3, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.04}
        loadedSVG={svg}
        canAnimateDispatch={dispatch}
      />
      <SkillSVG
        myID={3}
        position={[-3, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
        loadedSVG={svg}
        canAnimateDispatch={dispatch}
      />
      <SkillSVG
        myID={4}
        position={[0, 3, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.04}
        loadedSVG={svg}
        canAnimateDispatch={dispatch}
      />
      <SkillSVG
        myID={5}
        position={[0, -3, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.04}
        loadedSVG={svg}
        canAnimateDispatch={dispatch}
      />
    </motion.group>
  );
};

type SkillSVGProps = GroupProps & {
  loadedSVG: SVGResult;
  myID: number;
  canAnimateDispatch?: React.Dispatch<number>;
};
const SkillSVG = ({
  loadedSVG,
  myID,
  canAnimateDispatch,
  ...props
}: SkillSVGProps) => {
  const [SVGElements, setSVGElements] = useState<{
    shapes: ShapeType[];
    strokes: StrokeType[];
  }>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    // set the shapes to be rendered
    let shapes = loadedSVG.paths
      .map((path, index) => {
        const fillColor = path.userData!.style.fill as string;
        const strokeColor = path.userData!.style.stroke as string;
        // decide if current fill path should be rendered based on the fill color
        const urlRegEx = /url\(.*\)/;
        let shouldRenderFill = true;
        if (
          fillColor === "none" ||
          fillColor === undefined ||
          fillColor === "" ||
          fillColor === "transparent" ||
          fillColor === null ||
          fillColor === "null" ||
          urlRegEx.test(fillColor)
        ) {
          shouldRenderFill = false;
        }
        // decide if current stroke path should be rendered based on the stroke color
        let shouldRenderStroke = true;
        if (
          strokeColor === "none" ||
          strokeColor === undefined ||
          strokeColor === "" ||
          strokeColor === "transparent" ||
          strokeColor === null ||
          strokeColor === "null" ||
          urlRegEx.test(strokeColor)
        ) {
          shouldRenderStroke = false;
        }
        // extract fill shapes
        const fillShapes: ShapeType[] = shouldRenderFill
          ? SVGLoader.createShapes(path).map((shape) => {
              return { shape, color: fillColor, index };
            })
          : [];
        // extract stroke shapes
        const strokeGeometries: StrokeType[] = shouldRenderStroke
          ? (path.subPaths.map((subPath) => {
              const geometry = SVGLoader.pointsToStroke(
                subPath.getPoints(),
                path.userData!.style
              );
              if (geometry) {
                return { geometry, color: strokeColor, index };
              }
            }) as StrokeType[])
          : [];
        return { fillShapes, strokeGeometries };
      })
      .reduce(
        (acc, curr) => {
          acc.fillShapes.push(...curr.fillShapes);
          acc.strokeGeometries.push(...curr.strokeGeometries);
          return acc;
        },
        { fillShapes: [], strokeGeometries: [] } as {
          fillShapes: ShapeType[];
          strokeGeometries: StrokeType[];
        }
      );
    // update the state with the shapes
    setSVGElements({
      shapes: shapes.fillShapes,
      strokes: shapes.strokeGeometries,
    });
  }, []);

  useLayoutEffect(() => {
    if (SVGElements === null) return;

    // set group rotation to 0 in order to get the correct center
    // since the geometry is not centered, if the group is rotated the center will be off
    const prevRotation = groupRef.current.rotation.clone();
    groupRef.current.rotation.set(0, 0, 0);

    // center the shapes
    // get the center of the group
    const box = new THREE.Box3().setFromObject(groupRef.current);
    let center = box.getCenter(new THREE.Vector3());
    // translate each shape to the center, accounting for scale & position of the group
    groupRef.current.children.forEach((child) => {
      if (child instanceof THREE.Mesh) {
        const scale = groupRef.current.getWorldScale(new THREE.Vector3());
        const position = groupRef.current.getWorldPosition(new THREE.Vector3());
        child.geometry.translate(
          (-center.x + position.x) / scale.x,
          (-center.y + position.y) / scale.y,
          (-center.z + position.z) / scale.z
        );
      }
    });
    // reset rotation of group
    groupRef.current.rotation.set(
      prevRotation.x,
      prevRotation.y,
      prevRotation.z
    );
    // Allow for animation to begin because any rotation before geometry centering will mess up the centering (for whatever reason?)
    canAnimateDispatch?.(myID);
  }, [SVGElements]);

  return (
    SVGElements !== null && (
      <group ref={groupRef} {...props}>
        {SVGElements.shapes.map(
          (item) =>
            item !== undefined && <SvgShape key={item.shape.uuid} {...item} />
        )}
        {SVGElements.strokes.map(
          (item) =>
            item !== undefined && (
              <SvgStroke key={item.geometry.uuid} {...item} />
            )
        )}
      </group>
    )
  );
};

type StrokeType = {
  geometry: THREE.BufferGeometry;
  color: string;
  index: number;
};
const SvgStroke = ({ geometry, color }: StrokeType) => {
  return (
    <mesh position={[0, 0, 0]}>
      <bufferGeometry attach='geometry' {...geometry} />
      <meshPhongMaterial
        attach='material'
        color={color === "none" ? "" : color === undefined ? "" : color}
        opacity={1}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
};

type ShapeType = {
  shape: THREE.Shape;
  color: string;
  index: number;
};
const SvgShape = ({ shape, color }: ShapeType) => {
  return (
    <mesh position={[0, 0, 0]}>
      <shapeGeometry attach='geometry' args={[shape]} />
      <meshPhongMaterial
        attach='material'
        color={color === "none" ? "" : color === undefined ? "" : color}
        opacity={1}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
};

export default Skills3D;
