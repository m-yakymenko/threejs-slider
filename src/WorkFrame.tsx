import { Box } from "@react-three/drei";
import { useCatstore } from "./store";

export const WorkFrame = () => {
  const { swiper, showMeshes } = useCatstore()
  //console.log(1111);


  return (
    <group >
      {swiper?.slidesGrid.map((slide, index) => <WorkScene
        position={[slide - swiper.slidesSizesGrid[index] - swiper.spaceBetween + swiper.translate, 0, 2]}
        width={swiper.slidesSizesGrid[index]}
        height={swiper.height}
        key={index}
        showMeshes={showMeshes}
      />)}
    </group>
  )
}


const WorkScene = ({ width, height, position, showMeshes }: { width: number, height: number, position: [number, number, number], showMeshes: boolean }) => {
  return (
    <group>
      <mesh castShadow position={position}>
        <boxGeometry args={[width, height, 1]} />
        <meshStandardMaterial
          transparent={showMeshes}
          opacity={showMeshes ? 1 : 0}
          colorWrite={showMeshes}
        />
      </mesh>

      {/* left plane*/}
      <mesh castShadow position={[position[0] - width / 2, position[1], position[2] + width / 2]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[width, height, 1]} />
        <meshStandardMaterial
          opacity={showMeshes ? 1 : 0}
          transparent={!showMeshes}
          colorWrite={showMeshes}
        />
      </mesh>

      {/* right plane*/}
      <mesh castShadow position={[position[0] + width / 2, position[1], position[2] + width / 2]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[width, height, 1]} />
        <meshStandardMaterial
          transparent={!showMeshes}
          opacity={showMeshes ? 1 : 0}
          colorWrite={showMeshes}
        />
      </mesh>

      <pointLight position={[position[0], position[1], position[2] + width * 0.9]} intensity={40000000} power={4000000000} castShadow distance={width * 1.3} color={0xffffff} />
      {showMeshes && <Box position={[position[0], position[1], position[2] + width * 0.9]} args={[5, 5, 5]} />}
    </group>
  )
}
