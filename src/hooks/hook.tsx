import { useQuery } from "react-query";
import { API } from "../api";
import { QueryKeys } from "../constans";
import { CatsItemType } from "../types";
import { queryCacheInterceptor } from "../utils";

export const useQueryCat = (): CatsItemType[] | undefined => {
  const { data: cats } = useQuery<CatsItemType[]>(
    QueryKeys.getCats,
    queryCacheInterceptor<CatsItemType[]>(QueryKeys.getCats, API.getCats), {
    onSuccess(data) {
      window.localStorage.setItem(QueryKeys.getCats, JSON.stringify(data))
    },
  });

  return cats
}
