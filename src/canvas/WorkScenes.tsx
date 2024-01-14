import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";
import { getSlideHeight } from "../helpers";
import { state } from "../store/state";
import { useCatstore } from "../store/store";
import { PointType } from "../types";

export const WorkScenes = () => {
  const { slider, showMeshes, imgRect } = useCatstore();
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.setX(state.position);
    }
  });

  return (
    <group ref={groupRef}>
      {slider?.slidesGrid.map((slide, index) => (
        <WorkScene
          position={[
            -window.innerWidth / 2 +
              slider.slidesSizesGrid[index].width / 2 +
              slide,
            getSlideHeight() / 2 -
              slider.slidesSizesGrid[index].top -
              slider.slidesSizesGrid[index].height / 2,
            2,
          ]}
          width={slider.slidesSizesGrid[index].width}
          height={slider.slidesSizesGrid[index].height}
          key={index}
          showMeshes={showMeshes}
          shiftMultiplier={imgRect ? 0 : 1}
        />
      ))}
    </group>
  );
};

const WorkScene = ({
  width,
  height,
  position,
  showMeshes,
  shiftMultiplier,
}: {
  width: number;
  height: number;
  position: PointType;
  showMeshes: boolean;
  shiftMultiplier: number;
}) => {
  const [isHidden, setisHidden] = useState(true);

  useFrame(() => {
    const leftX = position[0] - width / 2;
    const rightX = position[0] + width / 2;

    const leftBound = Math.abs(state.position) - window.innerWidth / 2;
    const rightBound = leftBound + window.innerWidth;

    if (rightX >= leftBound && leftX <= rightBound) {
      isHidden && setisHidden(false);
    } else {
      !isHidden && setisHidden(true);
    }
  });

  return (
    <group>
      <mesh castShadow position={position}>
        <boxGeometry args={[width, height, 1]} />
        <meshStandardMaterial
          transparent={false}
          opacity={showMeshes ? 1 : 0}
          colorWrite={showMeshes}
        />
      </mesh>

      {/* left plane*/}
      <mesh
        castShadow
        position={[
          position[0] - width / 2,
          position[1],
          position[2] + (height / 2) * shiftMultiplier,
        ]}
        rotation={[0, (Math.PI / 2) * shiftMultiplier, 0]}
      >
        <boxGeometry args={[height, height, 1]} />
        <meshStandardMaterial
          transparent={!!shiftMultiplier}
          opacity={showMeshes ? 1 : 0}
          colorWrite={showMeshes}
        />
      </mesh>

      {/* right plane*/}
      <mesh
        castShadow
        position={[
          position[0] + width / 2,
          position[1],
          position[2] + (height / 2) * shiftMultiplier,
        ]}
        rotation={[0, (Math.PI / 2) * shiftMultiplier, 0]}
      >
        <boxGeometry args={[height, height, 1]} />
        <meshStandardMaterial
          transparent={!!shiftMultiplier}
          opacity={showMeshes ? 1 : 0}
          colorWrite={showMeshes}
        />
      </mesh>

      {/* top plane*/}
      <mesh
        castShadow
        position={[
          position[0],
          position[1] + height / 2,
          position[2] + (height / 2) * shiftMultiplier,
        ]}
        rotation={[(Math.PI / 2) * shiftMultiplier, 0, 0]}
      >
        <boxGeometry args={[width, height, 1]} />
        <meshStandardMaterial
          transparent={!!shiftMultiplier}
          opacity={showMeshes ? 1 : 0}
          colorWrite={showMeshes}
        />
      </mesh>

      {/* bottom plane*/}
      <mesh
        castShadow
        position={[
          position[0],
          position[1] - height / 2,
          position[2] + (height / 2) * shiftMultiplier,
        ]}
        rotation={[(Math.PI / 2) * shiftMultiplier, 0, 0]}
      >
        <boxGeometry args={[width, height, 1]} />
        <meshStandardMaterial
          transparent={!!shiftMultiplier}
          opacity={showMeshes ? 1 : 0}
          colorWrite={showMeshes}
        />
      </mesh>

      {/* scene lights: middle */}
      <SceneLight
        position={position}
        width={height}
        showMeshes={showMeshes}
        height={height}
        visible={!isHidden}
      />
    </group>
  );
};

const SceneLight = ({
  position,
  width,
  showMeshes,
  height,
  visible,
}: {
  position: PointType;
  width: number;
  showMeshes: boolean;
  height: number;
  visible: boolean;
}) => {
  return (
    <>
      <pointLight
        position={[position[0], position[1], position[2] + width * 0.9]}
        decay={0}
        intensity={10}
        castShadow
        color={0xffffff}
        distance={height * 1.2}
        visible={visible}
      />
      {showMeshes && (
        <Box
          position={[position[0], position[1], position[2] + width * 0.9]}
          args={[5, 5, 5]}
        />
      )}
    </>
  );
};
