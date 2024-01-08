import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CatsItemType, SwiperDataType } from "../types";

interface CatsState {
  cats: CatsItemType[];
  setCats: (cats: CatsItemType[]) => void;
  swiper: SwiperDataType | null;
  setSwiper: (swiper: SwiperDataType | null) => void;
  showMeshes: boolean;
  setShowMeshes: (swiper: boolean) => void;
  imgRect: DOMRect | null;
  setImgRect: (imgRect: DOMRect | null) => void;
}

export const useCatstore = create<CatsState>()(
  devtools(
    persist(
      (set) => ({
        cats: [],
        setCats: (cats) => set(() => ({ cats: cats })),

        swiper: null,
        setSwiper: (swiper) => set(() => ({ swiper: swiper })),

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
