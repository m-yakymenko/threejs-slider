import { describe, expect, it } from "vitest";
import { getPointForCircleCurve } from "../helpers";

const requestA = [[0, 0, 0], 50, 5] as Parameters<
  typeof getPointForCircleCurve
>;
const resultA = [
  [50, 0, 0],
  [15.450849718747373, 0, 47.552825814757675],
  [-40.450849718747364, 0, 29.38926261462366],
  [-40.45084971874737, 0, -29.38926261462365],
  [15.450849718747362, 0, -47.55282581475768],
];

describe("getPointForCircleCurve", () => {
  const result = getPointForCircleCurve(...requestA);

  it("check if return right results", () => {
    expect(result).toStrictEqual(resultA);
  });
});
