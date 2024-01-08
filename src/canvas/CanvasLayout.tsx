import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import * as THREE from "three";
import { useCatstore } from "../store/store";
import { MovingText } from "./MovingText";
import { WorkScenes } from "./WorkScenes";

export const CanvasLayout = () => {
  const { showMeshes } = useCatstore();

  return (
    <CanvasWrapper>
      <Canvas
        shadows={{ type: THREE.BasicShadowMap }}
        camera={{
          position: [0, 0, 500],
          far: 4000,
          fov: 80,
        }}
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: showMeshes ? "auto" : "none",
        }}
      >
        <OrthographicCamera makeDefault position={[0, 0, 500]} far={5000} />

        {showMeshes && (
          <>
            <OrbitControls />
            <axesHelper args={[500]} />
          </>
        )}

        <MovingText showMeshes={showMeshes} />
        <WorkScenes />
      </Canvas>
    </CanvasWrapper>
  );
};

const CanvasWrapper = styled.div`
  pointer-events: none;
  cursor: grab;
  position: absolute;
  z-index: 3;
  top: 10vh;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.sizes.sliderHeight};
`;
