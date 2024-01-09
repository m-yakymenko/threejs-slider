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

export const MovingText = memo(
  ({
    showMeshes,
    shiftY,
    text,
    spliceFrom,
  }: {
    showMeshes: boolean;
    shiftY: number;
    text: string;
    spliceFrom: number;
  }) => {
    const [show, setshow] = useState(true);
    const state = useThree();

    const zRotation = -Math.PI * 0.9;
    const { height, width } = state.size;
    const fontSize = (height / 2 + width / 2) / 10;

    const curveModifierRef = useRef<CurveModifierRef>(null);
    const textRef = useRef<THREE.Mesh>(null);

    const textCircleCenter: PointType = useMemo(
      () => [0, shiftY * fontSize, (-width / Math.PI) * 0.98],
      [width, shiftY, fontSize],
    );

    const initialPoints = useMemo(() => {
      const points = getPointsForCircleCurve(textCircleCenter, width / 2.2, 50);

      if (spliceFrom) {
        const end = points.splice(
          Math.round(spliceFrom * (fontSize / width) * 8.5),
        );
        return [...end, ...points];
      }

      return points;
    }, [width, textCircleCenter, spliceFrom, fontSize]);

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
        textRef.current.geometry.rotateZ(zRotation);
        textRef.current.geometry.rotateX(Math.PI);
      }
    }, [textRef, show, zRotation]);

    if (!show) return null;

    return (
      <group rotation={[0, 0, zRotation]}>
        <mesh>
          <CurveModifier curve={curve} ref={curveModifierRef}>
            <Text3D
              font={"Noto_Sans_ExtraBold_Regular.json"}
              ref={textRef}
              size={fontSize}
              height={1}
              receiveShadow
            >
              {text}
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
  },
);
