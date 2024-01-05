import { useCalculateWorldUnitFromPixels } from "./hooks/hook"
import { useCatstore } from "./store"

export const PlatesOfInvisibility = () => {
  const { swiper } = useCatstore()
  const { worldUnitsPerPixel } = useCalculateWorldUnitFromPixels()
  console.log(worldUnitsPerPixel);


  return (
    <group frustumCulled >
      {swiper?.slidesGrid.map((slide, index) => <PlateOfInvisibility
        position={[slide - swiper.slidesSizesGrid[index] - swiper.spaceBetween, 0, 2]}
        width={swiper.slidesSizesGrid[index]}
        height={swiper.height}
      />)}
    </group>
  )
}


const PlateOfInvisibility = ({ width, height, position }: { width: number, height: number, position: [number, number, number] }) => {
  return (
    <group frustumCulled >
      <mesh castShadow position={position}>
        <boxGeometry args={[width, height, 0.1]} />
        <meshStandardMaterial
          color={0x00ff00}
        //transparent={false}
        //colorWrite={false}
        />
      </mesh>
    </group>
  )
}
