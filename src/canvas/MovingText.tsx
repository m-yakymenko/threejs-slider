import {
  CatmullRomLine,
  CurveModifier,
  CurveModifierRef,
  Text3D,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { getPointsForCircleCurve } from "../helpers";
import { PointType } from "../types";

export const MovingText = memo(({ showMeshes }: { showMeshes: boolean }) => {
  const [show, setshow] = useState(true);
  const state = useThree();

  const { height, width } = state.size;

  const textCircleCenter: PointType = useMemo(
    () => [0, 0, (-width / Math.PI) * 0.9],
    [width],
  );

  const initialPoints = useMemo(
    () => getPointsForCircleCurve(textCircleCenter, width / 2.5, 50),
    [width, textCircleCenter],
  );

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        initialPoints.map((point) => new THREE.Vector3(...point)),
        true,
        "centripetal",
        50,
      ),
    [initialPoints],
  );

  const curveModifierRef = useRef<CurveModifierRef>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (curveModifierRef.current) {
      curveModifierRef.current.moveAlongCurve(0.001);
    }
  });

  useEffect(() => {
    setshow(false);
  }, [height, width, showMeshes]);

  useEffect(() => {
    if (!show) setshow(true);
  }, [show]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.geometry.rotateX(Math.PI);
      textRef.current.geometry.rotateZ(Math.PI);
      textRef.current.geometry.rotateX(Math.PI);
    }
  }, [textRef, show]);

  if (!show) return null;

  return (
    <group>
      <mesh>
        <CurveModifier curve={curve} ref={curveModifierRef}>
          <Text3D
            font={"Noto_Sans_ExtraBold_Regular.json"}
            ref={textRef}
            size={height / 5}
            height={1}
            receiveShadow
          >
            hello world!
            <meshStandardMaterial />
          </Text3D>
        </CurveModifier>
      </mesh>

      {showMeshes && (
        <CatmullRomLine
          points={initialPoints}
          closed={true}
          curveType="centripetal"
        />
      )}

      <pointLight position={textCircleCenter} decay={0} intensity={1} />
    </group>
  );
});
