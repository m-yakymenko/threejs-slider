
import { Canvas, } from '@react-three/fiber'
import { CatmullRomLine, OrbitControls, PerspectiveCamera, } from '@react-three/drei'
import { initialPoints } from './constans'
import { MovingText } from './Text'


export const CanvasS = () => {


  return (
    <Canvas >
      <OrbitControls />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />


      <MovingText />
    </Canvas>
  )
}

