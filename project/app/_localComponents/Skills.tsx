"use client";

import * as THREE from "three";
import { motion } from "framer-motion-3d";
import {
  Canvas,
  useThree,
  useFrame,
  useLoader,
  GroupProps,
} from "@react-three/fiber";
// import flatten from "lodash-es/flatten";
import { SVGLoader, SVGResult } from "three/examples/jsm/loaders/SVGLoader";
import { ArcballControls, Html, PerspectiveCamera } from "@react-three/drei";
import {
  useRef,
  useState,
  Suspense,
  useEffect,
  useReducer,
  useLayoutEffect,
} from "react";
import skillList from "utils/skillsConfig";

const TEST_SVG_URL = "/images/skills/tailwindcss.svg";

const Skills = () => {
  return (
    <section className='w-full min-h-screen'>
      <div className='p-12 mx-auto -z-40 aspect-square max-w-7xl'>
        <Canvas shadows='soft' frameloop='always'>
          <Suspense fallback={null}>
            {/* <gridHelper
              args={[100, 100, "black", "grey"]}
              rotation={[-Math.PI / 2, 0, 0]}
            /> */}
            <SkillsMesh />
            <PerspectiveCamera makeDefault position={[0, 0, 80]}>
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
    </section>
  );
};

const SkillsMesh = () => {
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

  useFrame(({ clock }) => {
    if (!canAnimateSkills) return;
    skillsRef.current.rotation.set(
      clock.getElapsedTime() / 8,
      clock.getElapsedTime() / 10,
      clock.getElapsedTime() / 12
    );
  });

  return (
    <group
      ref={skillsRef}
      position={[0, 0, 0]}
      onAfterRender={() => {
        dispatch("init");
      }}>
      {skills
        .filter((skill) => skill.icon.svg != undefined)
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
              position={[x * sphereRadius, y * sphereRadius, z * sphereRadius]}
              receiveShadow
              castShadow
              svgPath={skill.icon.svg!}
              myID={index}
              canAnimateDispatch={dispatch}
              key={index}></SkillCube>
          );
        })}
    </group>
  );
};

type SkillCubeProps = GroupProps & {
  svgPath: string;
  myID?: number;
  canAnimateDispatch?: React.Dispatch<number>;
};
const SkillCube = ({
  svgPath,
  myID,
  canAnimateDispatch,
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

  // useFrame(({ clock }) => {
  //   if (!canAnimateGroup) return;

  //   skillCubeRef.current.rotation.set(
  //     clock.getElapsedTime() / 8,
  //     clock.getElapsedTime() / 10,
  //     clock.getElapsedTime() / 12
  //   );
  // });

  const materialVarients = {
    default: { color: "#BAB5A1" },
    hover: { color: "#a09b85" },
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
  const [shapes, setShapes] = useState<ShapeType[]>([]);
  const groupRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    // set the shapes to be rendered
    let shapes = loadedSVG.paths
      .map((path, index) => {
        return SVGLoader.createShapes(path).map((shape) => {
          const fillColor = path.userData!.style.fill as string;
          return { shape, color: fillColor, index };
        });
      })
      .flat(1);
    setShapes(shapes);
  }, []);

  useLayoutEffect(() => {
    if (shapes.length === 0) return;

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
    // Allow for animation to begin
    canAnimateDispatch?.(myID);
  }, [shapes]);

  return (
    <group ref={groupRef} {...props}>
      {shapes.map((item) => (
        <SvgShape key={item.shape.uuid} {...item} />
      ))}
    </group>
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

export default Skills;
