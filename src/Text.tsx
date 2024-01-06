import { CatmullRomLine, CurveModifier, CurveModifierRef, Text3D } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from 'three';



export const MovingText = () => {
  const state = useThree()
  const { height, width } = state.size
  const initialPoints = [
    [-width / 3, 0, -80],
    [-width / 3, 0, -width / 3 * 2],
    [width / 3, 0, -width / 3 * 2],
    [width / 3, 0, -80],
  ] as [number, number, number,][]

  const curve = useMemo(() => new THREE.CatmullRomCurve3(initialPoints.map(point => new THREE.Vector3(...point)), true, 'centripetal', 50), []);
  const curveModifierRef = useRef<CurveModifierRef>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (curveModifierRef.current) {
      curveModifierRef.current.moveAlongCurve(0.001);
    }
  });

  useEffect(() => {
    if (textRef.current) {
      textRef.current.geometry.rotateX(Math.PI)
      textRef.current.geometry.rotateZ(Math.PI)
      textRef.current.geometry.rotateX(Math.PI)
    }
  }, [textRef]);

  return (
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
};
