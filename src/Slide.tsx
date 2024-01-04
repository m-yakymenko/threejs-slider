
import { useTexture } from '@react-three/drei';
import Img from './assets/buffalo.png'

export const Slide = () => {

  const texture = useTexture(Img)

  return (
    <mesh castShadow position={[0, 0, 2]}>
      <boxGeometry args={[2, 2, 0.1]} />
      <meshStandardMaterial opacity={0} transparent depthWrite={false} />
    </mesh>
  )
}
