import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { CatsItemType } from './types'

interface CatsState {
  cats: CatsItemType[]
  setCats: (cats: CatsItemType[]) => void
}

export const useCatstore = create<CatsState>()(
  devtools(
    persist(
      (set) => ({
        cats: [],
        setCats: (cats) => set(() => ({ cats: cats })),
      }),
      {
        name: 'bear-storage',
      },
    ),
  ),
)
