
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Canvas, } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { PlatesOfInvisibility } from './PlateOfInvisibility';
import { MovingText } from './Text';
import { useCatstore } from './store';

export const CanvasS = () => {
  const light = useRef<THREE.DirectionalLight>(null)
  const { showMeshes } = useCatstore()

  useEffect(() => {
    if (light.current) {
      light.current.shadow.mapSize.width = 5120; // default
      light.current.shadow.mapSize.height = 5120; // default
      light.current.shadow.camera.near = 5000.5; // default
      light.current.shadow.camera.far = 5000; // default
    }
  }, [light]);

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
      {showMeshes && <OrbitControls />}
      <OrthographicCamera makeDefault position={[0, 0, 500]} far={2000} />
      <axesHelper args={[500]} />

      {/*<spotLight position={[0, 0, 10000]} angle={45} penumbra={1} decay={0} intensity={Math.PI * 100} castShadow distance={11000} color={'white'} />*/}
      {/*<pointLight position={[0, 0, -500]} decay={0} intensity={1} />*/}

      <MovingText />
      {/*<WorkFrame />*/}
      <PlatesOfInvisibility />

    </Canvas>
  )
}

