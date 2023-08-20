"use client";

import * as THREE from "three";
import { motion } from "framer-motion-3d";
import {
  MotionProps,
  useAnimate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Canvas, useLoader } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { ArcballControls, PerspectiveCamera } from "@react-three/drei";
import { useState, Suspense, useEffect, useMemo } from "react";
import Image from "next/image";
import { skills as skillList, Skill } from "utils/skillsConfig";
import { selectedTagsAtom, activeSkillAtom } from "./Skills";
import { useAtomValue, useSetAtom } from "jotai";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { skillsLoadedAtom } from "utils/state";

const SVGMaterial = new THREE.MeshPhongMaterial({
  vertexColors: true,
  side: THREE.DoubleSide,
  depthWrite: false,
});

const Skills3D = ({ className }: { className: string }) => {
  const setSkillsLoaded = useSetAtom(skillsLoadedAtom);
  return (
    <div className={className !== undefined ? className : "relative"}>
      <Image
        src='/images/drag-and-drop.png'
        alt='drag and drop'
        width={48}
        height={48}
        className='absolute h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 bottom-[10%] left-[10%] md:left-[unset] md:right-[15%] lg:right-[15%] xl:left-[20%] animate-wiggle animate-infinite opacity-75'
      />
      <Canvas
        onCreated={() => setSkillsLoaded(true)}
        shadows={false}
        frameloop='always'
        gl={{ precision: "lowp", powerPreference: "high-performance" }}>
        <Suspense fallback={null}>
          <SkillsGroup />
          <PerspectiveCamera makeDefault position={[0, 0, 70]} far={300}>
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
          <ambientLight intensity={0.1} />
          <ArcballControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

const SkillsGroup = () => {
  const calculateSphereRadius = (numberOfSkills: number) => {
    return Math.sqrt(numberOfSkills) * Math.PI;
  };
  const [sphereRadius, setSphereRadius] = useState(
    calculateSphereRadius(skillList.length)
  );
  const selectedTags = useAtomValue(selectedTagsAtom);
  const [skills, setSkills] = useState(skillList);

  useEffect(() => {
    // filter skills based on selected tags
    if (selectedTags.length === 0) {
      // no filter selected, render all skills. sphere radius is based on the number of skills total
      setSphereRadius(calculateSphereRadius(skillList.length));
      setSkills(skillList);
      return;
    }
    const filteredSkills = skillList.filter((skill) => {
      return skill.tags.some((tag) =>
        selectedTags.some((selectedTag) => Object.keys(selectedTag)[0] === tag)
      );
    });
    setSkills(filteredSkills);

    // calculate an aproximate radius for the sphere based on the number of skills to be rendered
    setSphereRadius(calculateSphereRadius(filteredSkills.length));
  }, [selectedTags]);

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
        duration: 80,
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
              animate={{
                x: x * sphereRadius,
                y: y * sphereRadius,
                z: z * sphereRadius,
              }}
              skill={skill}
              key={skill.uuid}
            />
          );
        })}
    </motion.group>
  );
};

type SkillSVGProps = MotionProps & {
  skill: Skill;
};
const SkillCube = ({ skill, ...motionProps }: SkillSVGProps) => {
  const setActiveSkill = useSetAtom(activeSkillAtom);

  const SVGGeometry: THREE.BufferGeometry = useMemo(() => {
    const svg = useLoader(SVGLoader, skill.icon.svg!);
    let geometriesToMerge = svg.paths
      .map((path) => {
        const fillColor = path.userData!.style.fill as string;
        const strokeColor = path.userData!.style.stroke as string;

        // decide if current fill path should be rendered based on the fill color
        const urlRegEx = /url\((.*)\)/;
        let THREEFillColor: THREE.Color | undefined = undefined;
        if (
          !(
            fillColor === "none" ||
            fillColor === undefined ||
            fillColor === "" ||
            fillColor === "transparent" ||
            fillColor === null ||
            fillColor === "null" ||
            urlRegEx.test(fillColor)
          )
        ) {
          THREEFillColor = new THREE.Color(fillColor);
        }
        // extract fill geometry
        const fillGeometry: THREE.BufferGeometry | null =
          THREEFillColor !== undefined
            ? mergeGeometries(
                SVGLoader.createShapes(path).map((shape) => {
                  // Create the geometry thanks to the shape
                  const geom = new THREE.ShapeGeometry(shape);
                  // Create an attributes (same length that the indices) that will store the color state
                  const indicesLength = geom.attributes.position.count;
                  const aColor = new Float32Array(indicesLength * 3);
                  for (let k = 0; k < aColor.length; k += 3) {
                    aColor[k] = THREEFillColor!.r;
                    aColor[k + 1] = THREEFillColor!.g;
                    aColor[k + 2] = THREEFillColor!.b;
                  }
                  geom.setAttribute(
                    "color",
                    new THREE.BufferAttribute(aColor, 3)
                  );
                  return geom.toNonIndexed(); // Get rid of potential index attribute to not interfere with mergeGeometries
                })
              )
            : null;

        // decide if current stroke path should be rendered based on the stroke color
        let THREEStrokeColor: THREE.Color | undefined = undefined;
        if (
          !(
            strokeColor === "none" ||
            strokeColor === undefined ||
            strokeColor === "" ||
            strokeColor === "transparent" ||
            strokeColor === null ||
            strokeColor === "null" ||
            urlRegEx.test(strokeColor)
          )
        ) {
          THREEStrokeColor = new THREE.Color(strokeColor);
        }
        // extract stroke geometry
        const strokeGeometry: THREE.BufferGeometry | null =
          THREEStrokeColor !== undefined
            ? mergeGeometries(
                path.subPaths
                  .map((subPath) => {
                    const geom = SVGLoader.pointsToStroke(
                      subPath.getPoints(),
                      path.userData!.style
                    );
                    if (!geom) return null!;
                    // Create an attributes (same length that the indices) that will store the color state
                    const indicesLength = geom.attributes.position.count;
                    const aColor = new Float32Array(indicesLength * 3);
                    for (let k = 0; k < aColor.length; k += 3) {
                      aColor[k] = THREEStrokeColor!.r;
                      aColor[k + 1] = THREEStrokeColor!.g;
                      aColor[k + 2] = THREEStrokeColor!.b;
                    }
                    geom.setAttribute(
                      "color",
                      new THREE.BufferAttribute(aColor, 3)
                    );
                    return geom.toNonIndexed(); // Get rid of potential index attribute to not interfere with mergeGeometries
                  })
                  .filter((geometry) => geometry !== null)
              )
            : null;
        let geometriesToMerge = [];
        if (fillGeometry !== null) geometriesToMerge.push(fillGeometry);
        if (strokeGeometry !== null) geometriesToMerge.push(strokeGeometry);
        const mergedGeometries = mergeGeometries(geometriesToMerge);
        return geometriesToMerge.length === 0 ? null : mergedGeometries;
      })
      .filter((geometry) => geometry !== null);
    return mergeGeometries(
      geometriesToMerge as THREE.BufferGeometry[]
    ).center();
  }, []);

  const cubeColor = useMotionValue("#a09b85");
  const groupScale = useMotionValue(1);
  const cubeColorSpring = useSpring(cubeColor, {
    stiffness: 1000,
    damping: 100,
  });
  const groupScaleSpring = useSpring(groupScale, {
    stiffness: 1000,
    damping: 50,
  });

  const [state, animate] = useAnimate();

  return (
    <Suspense fallback={null}>
      <motion.group
        ref={state}
        scale={groupScaleSpring}
        {...motionProps}
        onClick={(e) => {
          setActiveSkill(skill);
          e.stopPropagation();
          animate([
            [groupScaleSpring, 0.8, { duration: 0.1 }],
            [cubeColorSpring, "#000", { duration: 0.1, at: 0 }],
            [groupScaleSpring, 1, { duration: 0.1 }],
            [cubeColorSpring, "#a09b85", { duration: 0.1, at: 0.1 }],
          ]);
        }}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[5.9, 5.9, 5.9]} />
          <motion.meshPhongMaterial color={cubeColorSpring} />
        </mesh>
        <mesh
          renderOrder={1}
          geometry={SVGGeometry}
          material={SVGMaterial}
          position={[0, 0, 3]}
          rotation={[Math.PI, 0, 0]}
          scale={0.04}></mesh>
        <mesh
          renderOrder={1}
          geometry={SVGGeometry}
          material={SVGMaterial}
          position={[0, 0, -3]}
          rotation={[0, 0, Math.PI]}
          scale={0.04}
        />
        <mesh
          renderOrder={1}
          geometry={SVGGeometry}
          material={SVGMaterial}
          position={[3, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.04}
        />
        <mesh
          renderOrder={1}
          geometry={SVGGeometry}
          material={SVGMaterial}
          position={[-3, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.04}
        />
        <mesh
          renderOrder={1}
          geometry={SVGGeometry}
          material={SVGMaterial}
          position={[0, 3, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
        />
        <mesh
          renderOrder={1}
          geometry={SVGGeometry}
          material={SVGMaterial}
          position={[0, -3, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.04}
        />
      </motion.group>
    </Suspense>
  );
};

export default Skills3D;
