export const queryCacheInterceptor = <T = any>(queryKey: string, queryFn: () => Promise<T>) => {
  const callQueryFn = async () => {
    const data = await queryFn();
    window.localStorage.setItem(queryKey, JSON.stringify(data))
    return data
  }

  return () => {
    const localData = window.localStorage.getItem(queryKey)

    if (localData) {
      try {
        return JSON.parse(localData)
      } catch (error) {
        window.localStorage.removeItem(queryKey)
        return callQueryFn
      }
    } else {
      return callQueryFn
    }
  }
}
