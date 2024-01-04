import * as THREE from 'three';
import { CatmullRomLine, CurveModifier, CurveModifierRef, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { initialPoints } from './constans';

export const MovingText = () => {
  const curve = useMemo(() => new THREE.CatmullRomCurve3(initialPoints.map(point => new THREE.Vector3(...point)), true, 'centripetal', 50), []);

  const curveModifierRef = useRef<CurveModifierRef>(null);
  //const meshRef = useRef<THREE.Mesh>(null);
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
    <mesh
      rotation={[0, 0, 0]}
    >
      <CurveModifier curve={curve} ref={curveModifierRef} >
        <Text3D font={'helvetiker_regular.typeface.json'} ref={textRef} size={1} height={0.01} receiveShadow
        >
          hello world!
          <meshStandardMaterial />
        </Text3D>
      </CurveModifier>

    </mesh >
  );
};
