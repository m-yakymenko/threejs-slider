import { useEffect } from "react";
import { useCatstore } from "../store";

export const useDownloadCats = () => {
  const { setCats } = useCatstore.getState()

  useEffect(() => {
    //(async () => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10').then(res => res.json()).then(res => {
      setCats(res)
    })

    //})()/
  }, []);
}
