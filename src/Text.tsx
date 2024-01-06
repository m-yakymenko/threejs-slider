import { CatmullRomLine, CurveModifier, CurveModifierRef, Text3D } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from 'three';
import { getPointForCircleCurve } from "./helpers";


export const MovingText = memo(() => {
  const state = useThree()
  const [hide, sethide] = useState(true);

  const { height, width } = state.size
  const initialPoints = getPointForCircleCurve([0, 0, -width / 2 / Math.PI * 3], width / 2, 50)

  const curve = useMemo(() => new THREE.CatmullRomCurve3(initialPoints.map(point => new THREE.Vector3(...point)), true, 'centripetal', 50), []);
  const curveModifierRef = useRef<CurveModifierRef>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (curveModifierRef.current) {
      curveModifierRef.current.moveAlongCurve(0.001);
    }
  });

  useEffect(() => {
    sethide(false)
  }, [height, width]);

  useEffect(() => {
    if (!hide) sethide(true)
  }, [hide]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.geometry.rotateX(Math.PI)
      textRef.current.geometry.rotateZ(Math.PI)
      textRef.current.geometry.rotateX(Math.PI)
    }
  }, [textRef, hide]);

  return hide && (
    <>
      <mesh>
        <CurveModifier curve={curve} ref={curveModifierRef} >
          <Text3D font={'helvetiker_regular.typeface.json'} ref={textRef} size={height / 5} height={1} receiveShadow
          >
            hello world!
            <meshStandardMaterial />
          </Text3D>
        </CurveModifier>
      </mesh>

      <CatmullRomLine
        points={initialPoints}       // Array of Points
        closed={true}                  // Default
        curveType="centripetal"
      />
    </>
  );
});
