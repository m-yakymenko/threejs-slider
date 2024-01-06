import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { CatsItemType, SwiperDataType } from './types'

interface CatsState {
  cats: CatsItemType[]
  setCats: (cats: CatsItemType[]) => void
  swiper: SwiperDataType | null
  setSwiper: (swiper: SwiperDataType | null) => void
  showMeshes: boolean
  setShowMeshes: (swiper: boolean) => void
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
      }),
      {
        name: 'bear-storage',
      },
    ),
  ),
)
