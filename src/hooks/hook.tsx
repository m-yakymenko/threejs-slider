import { useThree } from "@react-three/fiber";
import { useQuery } from "react-query";
import { API } from "../api";
import { QueryKeys } from "../constans";
import { CatsItemType } from "../types";

export const useCalculateWorldUnitFromPixels = () => {
  const state = useThree()
  console.log(state);

  //const { fov, aspect } = (state.camera as THREE.PerspectiveCamera)
  //const scaleFactor = Math.tan((fov * Math.PI / 180) / 2) * 2 / aspect;
  //const worldUnitsPerPixel = scaleFactor / state.size.height;
  return { worldUnitsPerPixel: 1 }
}

export const useQueryCat = (): CatsItemType[] | undefined => {
  const { data: cats } = useQuery<CatsItemType[]>(QueryKeys.getCats, () => {
    const localData = window.localStorage.getItem(QueryKeys.getCats)
    let localCats: CatsItemType[] = []

    if (localData) {
      try {
        localCats = JSON.parse(localData)
        return localCats
      } catch (error) {
        window.localStorage.removeItem(QueryKeys.getCats)
        return API.getCats
      }
    } else {
      return API.getCats
    }

  }, {
    onSuccess(data) {
      window.localStorage.setItem(QueryKeys.getCats, JSON.stringify(data))
    },
  });

  return cats
}
