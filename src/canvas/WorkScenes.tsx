import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";
import { state } from "../store/state";
import { useCatstore } from "../store/store";

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
            slide - slider.slidesSizesGrid[index] - slider.spaceBetween,
            0,
            2,
          ]}
          width={slider.slidesSizesGrid[index]}
          height={slider.height}
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
  position: [number, number, number];
  showMeshes: boolean;
  shiftMultiplier: number;
}) => {
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
          position[2] + (width / 2) * shiftMultiplier,
        ]}
        rotation={[0, (Math.PI / 2) * shiftMultiplier, 0]}
      >
        <boxGeometry args={[width, height, 1]} />
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
          position[2] + (width / 2) * shiftMultiplier,
        ]}
        rotation={[0, (Math.PI / 2) * shiftMultiplier, 0]}
      >
        <boxGeometry args={[width, height, 1]} />
        <meshStandardMaterial
          transparent={!!shiftMultiplier}
          opacity={showMeshes ? 1 : 0}
          colorWrite={showMeshes}
        />
      </mesh>

      {/* scene light */}
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
