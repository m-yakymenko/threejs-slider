import { useThree } from "@react-three/fiber"

export const WorkFrame = () => {
  const state = useThree()
  const { height, width } = state.size

  return (
    <group>
      <mesh castShadow position={[-width / 3, 0, 300]}>
        <boxGeometry args={[width / 3, height, 0.1]} />
        <meshStandardMaterial
          opacity={0} transparent depthWrite={false}
        />
      </mesh>
      <mesh castShadow position={[width / 3, 0, 300]}>
        <boxGeometry args={[width / 3, height, 0.1]} />
        <meshStandardMaterial
          opacity={0} transparent depthWrite={false}
        />
      </mesh>
    </group>
  )
}
