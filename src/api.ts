export const API = {
  getCats: () => fetch('https://api.thecatapi.com/v1/images/search?limit=10').then(res => res.json())
} as const

