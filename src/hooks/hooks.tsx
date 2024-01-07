import { useQuery } from "react-query";
import { API } from "../api";
import { QueryKeys } from "../constans";
import { useCatstore } from "../store/store";
import { CatsItemType } from "../types";

export const useQueryCat = (): CatsItemType[] | undefined => {
  const [cats, setCats] = useCatstore((state) => [state.cats, state.setCats]);

  useQuery<CatsItemType[]>(QueryKeys.getCats, API.getCats, {
    onSuccess: (data) => setCats(data),
    enabled: !cats.length,
  });

  return cats;
};
