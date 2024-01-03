
import { Canvas, } from '@react-three/fiber'
import { CatmullRomLine, OrbitControls, } from '@react-three/drei'
import { initialPoints } from './constans'
import { MovingText } from './Text'


export const CanvasS = () => {


  return (
    <Canvas >
      <OrbitControls />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <CatmullRomLine
        points={initialPoints}       // Array of Points
        closed={true}                  // Default
        curveType="centripetal"         // One of "centripetal" (default), "chordal", or "catmullrom"
        tension={0.5}                   // Default (only applies to "catmullrom" curveType)
        color="black"                   // Default
        lineWidth={1}                   // In pixels (default)
        dashed={false}
      />

      <MovingText />
    </Canvas>
  )
}

