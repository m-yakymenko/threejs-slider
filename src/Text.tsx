import * as THREE from 'three'

import { CurveModifier, CurveModifierRef, Text3D } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import { initialPoints } from './constans'

export const MovingText = () => {
  const curve = useMemo(() => new THREE.CatmullRomCurve3(initialPoints.map(point => new THREE.Vector3(...point)), true, 'centripetal'), [])

  const curveRef = useRef<CurveModifierRef>(null)
  const meshRef = useRef<CurveModifierRef>(null)


  useFrame(() => {
    if (curveRef.current) {
      curveRef.current.moveAlongCurve(0.001);
    }
  });
  return (
    <mesh >
      <CurveModifier curve={curve} ref={curveRef}>
        <Text3D font={'helvetiker_regular.typeface.json'} rotation={[0, 0, 0]} bevelEnabled={true} >
          hello world!
          <meshNormalMaterial />
        </Text3D>
      </CurveModifier>
    </mesh>
  )
}
