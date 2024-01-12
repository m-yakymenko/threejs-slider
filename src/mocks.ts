import { CatsItemType } from "./types";

export const getCatsMock = (quantity: number): CatsItemType[] =>
  Array(quantity)
    .fill({
      id: "0",
      width: 300,
      height: 200,
      url: "",
    })
    .map((item, index) => ({ ...item, id: String(index) }));
