
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Canvas, } from '@react-three/fiber';
import * as THREE from 'three';
import { MovingText } from './Text';
import { WorkFrame } from './WorkFrame';
import { useCatstore } from './store';

export const CanvasS = () => {
  const { showMeshes } = useCatstore()

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
        pointerEvents: showMeshes ? 'auto' : 'none'
      }}>
      {showMeshes && <OrbitControls />}
      <OrthographicCamera makeDefault position={[0, 0, 500]} far={2000} />
      {showMeshes && <axesHelper args={[500]} />}

      <MovingText />
      <WorkFrame />

    </Canvas>
  )
}

