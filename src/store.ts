import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { CatsItemType, SwiperDataType } from './types'

interface CatsState {
  cats: CatsItemType[]
  setCats: (cats: CatsItemType[]) => void
  swiper: SwiperDataType | null
  setSwiper: (swiper: SwiperDataType | null) => void
}

export const useCatstore = create<CatsState>()(
  devtools(
    persist(
      (set) => ({
        cats: [],
        setCats: (cats) => set(() => ({ cats: cats })),

        swiper: null,
        setSwiper: (swiper) => set(() => ({ swiper: swiper })),
      }),
      {
        name: 'bear-storage',
      },
    ),
  ),
)
