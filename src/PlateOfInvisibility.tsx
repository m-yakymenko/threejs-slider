export const PlateOfInvisibility = () => {
  return (
    <group frustumCulled >
      <mesh castShadow position={[0, 0, 2]}>
        <boxGeometry args={[2, 2, 0.1]} />
        <meshStandardMaterial
          color={0x00ff00}
          transparent={false}
          colorWrite={false}
        />
      </mesh>
    </group>
  )
}
