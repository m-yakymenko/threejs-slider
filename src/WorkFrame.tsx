import { useThree } from "@react-three/fiber"
import { useCatstore } from "./store"

export const WorkFrame = () => {
  const state = useThree()
  const { swiper } = useCatstore()

  return (
    <group>
      {swiper?.slidesGrid.map((slide, index) => <ShadowFrame
        position={[slide - swiper.slidesSizesGrid[index] * 1.5 - swiper.spaceBetween * 1.5, 0, 150]}
        width={swiper.spaceBetween}
        height={swiper.height}
        key={index}
      />)}

    </group>
  )
}

const ShadowFrame = ({ width, height, position }: { width: number, height: number, position: [number, number, number] }) => {
  return (
    <mesh castShadow position={position}>
      <boxGeometry args={[width, height, 1]} />
      <meshStandardMaterial
        opacity={0} transparent
        depthWrite={false}
      />
    </mesh>
  )
}
