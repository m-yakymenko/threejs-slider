import { useRef } from "react";
import { useQuery } from "react-query";
import { API } from "../api";
import { QueryKeys } from "../constans";
import { getCatsMock } from "../mocks";
import { useCatstore } from "../store/store";
import { CatsItemType } from "../types";

export const useQueryCat = (): CatsItemType[] | undefined => {
  const [cats, setCats] = useCatstore((state) => [state.cats, state.setCats]);
  const catsMockRef = useRef(getCatsMock(4));

  useQuery<CatsItemType[]>(QueryKeys.getCats, API.getCats, {
    onSuccess: (data) => setCats(data),
    enabled: !cats.length,
    initialData: catsMockRef.current,
    keepPreviousData: true,
  });

  return cats.length ? cats : catsMockRef.current;
};
