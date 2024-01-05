export const PlatesOfInvisibility = () => {
  return (
    <group frustumCulled >
      <PlateOfInvisibility position={[-3, 0, 2]} />
      <PlateOfInvisibility position={[0, 0, 2]} />
      <PlateOfInvisibility position={[3, 0, 2]} />
    </group>
  )
}


const PlateOfInvisibility = ({ position }: { position: [number, number, number] }) => {
  return (
    <group frustumCulled >
      <mesh castShadow position={position}>
        <boxGeometry args={[2, 5, 0.1]} />
        <meshStandardMaterial
          color={0x00ff00}
        //transparent={false}
        //colorWrite={false}
        />
      </mesh>
    </group>
  )
}
