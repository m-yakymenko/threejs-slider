
import { useTexture } from '@react-three/drei';
import Img from './assets/buffalo.png'

export const WorkFrame = () => {

  return (
    <group>
      <mesh castShadow position={[-1.3, 0, 3]}>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshStandardMaterial opacity={0} transparent depthWrite={false} />
      </mesh>
      <mesh castShadow position={[1.3, 0, 3]}>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshStandardMaterial opacity={0} transparent depthWrite={false} />
      </mesh>
    </group>
  )
}
