import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";
import { state } from "../store/state";
import { useCatstore } from "../store/store";

export const WorkFrame = () => {
  const { swiper, showMeshes, imgRect } = useCatstore();
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.setX(state.position);
    }
  });

  return (
    <group ref={groupRef}>
      {swiper?.slidesGrid.map((slide, index) => (
        <WorkScene
          position={[
            slide - swiper.slidesSizesGrid[index] - swiper.spaceBetween,
            0,
            2,
          ]}
          width={swiper.slidesSizesGrid[index]}
          height={swiper.height}
          key={index}
          showMeshes={showMeshes}
          isImageFs={!!imgRect}
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
  isImageFs,
}: {
  width: number;
  height: number;
  position: [number, number, number];
  showMeshes: boolean;
  isImageFs: boolean;
}) => {
  const isImageFsNum = isImageFs ? 0 : 1;
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
          position[2] + (width / 2) * isImageFsNum,
        ]}
        rotation={[0, (Math.PI / 2) * isImageFsNum, 0]}
      >
        <boxGeometry args={[width, height, 1]} />
        <meshStandardMaterial
          transparent={!isImageFs}
          opacity={showMeshes ? 1 : 0}
          colorWrite={showMeshes}
          depthWrite={true}
        />
      </mesh>

      {/* right plane*/}
      <mesh
        castShadow
        position={[
          position[0] + width / 2,
          position[1],
          position[2] + (width / 2) * isImageFsNum,
        ]}
        rotation={[0, (Math.PI / 2) * isImageFsNum, 0]}
      >
        <boxGeometry args={[width, height, 1]} />
        <meshStandardMaterial
          transparent={!isImageFs}
          opacity={showMeshes ? 1 : 0}
          colorWrite={showMeshes}
        />
      </mesh>

      <pointLight
        position={[position[0], position[1], position[2] + width * 0.9]}
        intensity={40000000}
        power={4000000000}
        castShadow
        distance={height}
        color={0xffffff}
      />
      {showMeshes && (
        <Box
          position={[position[0], position[1], position[2] + width * 0.9]}
          args={[5, 5, 5]}
        />
      )}
    </group>
  );
};
