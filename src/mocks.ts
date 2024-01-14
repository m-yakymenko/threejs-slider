import { CatItemType } from "./types";

export const getCatsMock = (quantity: number): CatItemType[] =>
  Array(quantity)
    .fill({
      id: "0",
      width: 300,
      height: 200,
      url: "",
    })
    .map((item, index) => ({ ...item, id: String(index) }));
