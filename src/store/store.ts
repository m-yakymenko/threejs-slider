import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CatItemType, SliderDataType } from "../types";

export interface CatsStateInterface {
  cats: CatItemType[];
  setCats: (cats: CatItemType[]) => void;
  slider: SliderDataType | null;
  setSlider: (slider: SliderDataType | null) => void;
  showMeshes: boolean;
  setShowMeshes: (show: boolean) => void;
  imgRect: DOMRect | null;
  setImgRect: (imgRect: DOMRect | null) => void;
  showFeDisplacementMap: boolean;
  setShowFeDisplacementMap: (show: boolean) => void;
}

export const useCatstore = create<CatsStateInterface>()(
  devtools(
    persist(
      (set) => ({
        cats: [],
        setCats: (cats) => set(() => ({ cats: cats })),

        slider: null,
        setSlider: (slider) => set(() => ({ slider: slider })),

        showMeshes: false,
        setShowMeshes: (showMeshes) => set(() => ({ showMeshes: showMeshes })),

        imgRect: null,
        setImgRect: (imgRect) => set(() => ({ imgRect: imgRect })),

        showFeDisplacementMap: false,
        setShowFeDisplacementMap: (showFeDisplacementMap) =>
          set(() => ({ showFeDisplacementMap: showFeDisplacementMap })),
      }),
      {
        name: "cats-storage",
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(
              ([key]) =>
                !["showMeshes", "imgRect", "showFeDisplacementMap"].includes(
                  key,
                ),
            ),
          ),
      },
    ),
  ),
);
