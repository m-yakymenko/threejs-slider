
import * as THREE from 'three';
import { Canvas, } from '@react-three/fiber'
import { OrbitControls, } from '@react-three/drei'
import { MovingText } from './Text'
import { WorkFrame } from './WorkFrame';
import { PlateOfInvisibility } from './PlateOfInvisibility';

export const CanvasS = () => {
  return (
    <Canvas shadows={{ type: THREE.BasicShadowMap }} style={{
      width: '100%', height: '100%',
      //pointerEvents: 'none' 
    }}>
      <OrbitControls />
      {/*<ambientLight position={[0, 0, 9]} intensity={Math.PI / 2} />*/}
      <spotLight position={[0, 0, 9]} angle={0.45} penumbra={1} decay={0} intensity={Math.PI} castShadow distance={10} color={'white'} />
      <pointLight position={[0, 0, 1]} decay={0} intensity={0.5} />
      {/*<directionalLight position={[0, 0, 9]} castShadow />*/}

      <MovingText />

      {/*<Slide />*/}
      <WorkFrame />
      <PlateOfInvisibility />
    </Canvas>
  )
}

