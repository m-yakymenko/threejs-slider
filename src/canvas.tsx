
import * as THREE from 'three';
import { Canvas, } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera, PerspectiveCamera, Text3D, } from '@react-three/drei'
import { MovingText } from './Text'
import { WorkFrame } from './WorkFrame';
import { PlatesOfInvisibility } from './PlateOfInvisibility';
import { useRef } from 'react';

export const CanvasS = () => {
  return (
    <Canvas
      shadows={{ type: THREE.BasicShadowMap }}
      camera={
        {
          position: [0, 0, 500],
          far: 4000,
          fov: 80
        }
      }
      style={{
        width: '100%',
        height: '100%',
        //pointerEvents: 'none' 
      }}>
      <OrbitControls />
      {/*<OrthographicCamera makeDefault position={[0, 0, 500]} far={2000} />*/}

      <spotLight position={[0, 0, 10000]} angle={45} penumbra={1} decay={0} intensity={Math.PI * 100} castShadow distance={10000} color={'white'} />
      {/*<pointLight position={[0, 0, -500]} decay={0} intensity={1} />*/}

      <MovingText />
      <WorkFrame />
      <PlatesOfInvisibility />

    </Canvas>
  )
}

