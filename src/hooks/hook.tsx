import { useThree } from "@react-three/fiber"

export const useCalculateWorldUnitFromPixels = () => {
  const state = useThree()
  console.log(state);

  //const { fov, aspect } = (state.camera as THREE.PerspectiveCamera)
  //const scaleFactor = Math.tan((fov * Math.PI / 180) / 2) * 2 / aspect;
  //const worldUnitsPerPixel = scaleFactor / state.size.height;
  return { worldUnitsPerPixel: 1 }
}
