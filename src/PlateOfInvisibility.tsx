import { useCatstore } from "./store"

export const PlatesOfInvisibility = () => {
  const { swiper } = useCatstore()

  return (
    <group >
      {swiper?.slidesGrid.map((slide, index) => <PlateOfInvisibility
        position={[slide - swiper.slidesSizesGrid[index] - swiper.spaceBetween, 0, 2]}
        width={swiper.slidesSizesGrid[index]}
        height={swiper.height}
        key={index}
      />)}
    </group>
  )
}


const PlateOfInvisibility = ({ width, height, position }: { width: number, height: number, position: [number, number, number] }) => {
  return (
    <group frustumCulled >
      <mesh castShadow position={position}>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial
          color={0x00ff00}
          transparent={false}
          colorWrite={false}
        />
      </mesh>
    </group>
  )
}
