
import * as THREE from 'three';
import { Canvas, } from '@react-three/fiber'
import { Box, CatmullRomLine, OrbitControls, PerspectiveCamera, Plane, } from '@react-three/drei'
import { MovingText } from './Text'
import { Slide } from './Slide'
import { WorkFrame } from './WorkFrame';

export const CanvasS = () => {


  return (
    <Canvas shadows={{ type: THREE.BasicShadowMap }} >
      <OrbitControls />
      {/*<ambientLight position={[0, 0, 9]} intensity={Math.PI / 2} />*/}
      <spotLight position={[0, 0, 9]} angle={0.45} penumbra={1} decay={0} intensity={Math.PI} castShadow />
      <pointLight position={[0, 0, 1]} decay={0} intensity={0.5} />
      {/*<directionalLight position={[0, 0, 9]} castShadow />*/}

      <MovingText />

      <Slide />
      <WorkFrame />
    </Canvas>
  )
}

