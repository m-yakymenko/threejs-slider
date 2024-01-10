import { OrbitControls } from "@react-three/drei";

export const CanvasHelpers = () => {
  return (
    <>
      <OrbitControls />
      <axesHelper args={[500]} />
      <gridHelper args={[500, 50]} rotation={[0, 0, 0]} />
    </>
  );
};
