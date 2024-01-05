
import * as THREE from 'three';
import { Canvas, } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera, } from '@react-three/drei'
import { MovingText } from './Text'
import { WorkFrame } from './WorkFrame';
import { PlatesOfInvisibility } from './PlateOfInvisibility';
import { useRef } from 'react';

export const CanvasS = () => {
  return (
    <Canvas
      shadows={{ type: THREE.BasicShadowMap }}
      style={{
        width: '100%',
        height: '100%',
        //pointerEvents: 'none' 
      }}>
      <OrbitControls />
      <OrthographicCamera makeDefault position={[0, 0, 500]} far={1000} />
      {/*<ambientLight position={[0, 0, 9]} intensity={Math.PI / 2} />*/}
      <spotLight position={[0, 0, 1000]} angle={0.45} penumbra={1} decay={0} intensity={Math.PI} castShadow distance={1000} color={'white'} />
      <pointLight position={[0, 0, 1]} decay={0} intensity={0.5} />
      {/*<directionalLight position={[0, 0, 9]} castShadow />*/}

      <MovingText />

      {/*<Slide />*/}
      <WorkFrame />
      <PlatesOfInvisibility />
    </Canvas>
  )
}

