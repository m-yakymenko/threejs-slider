import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CatsItemType, SliderDataType } from "../types";

interface CatsState {
  cats: CatsItemType[];
  setCats: (cats: CatsItemType[]) => void;
  slider: SliderDataType | null;
  setSlider: (slider: SliderDataType | null) => void;
  showMeshes: boolean;
  setShowMeshes: (slider: boolean) => void;
  imgRect: DOMRect | null;
  setImgRect: (imgRect: DOMRect | null) => void;
}

export const useCatstore = create<CatsState>()(
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
      }),
      {
        name: "cats-storage",
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(
              ([key]) => !["showMeshes", "imgRect"].includes(key),
            ),
          ),
      },
    ),
  ),
);
