import { PointType } from "./types";

export const getPointsForCircleCurve = (
  center: [number, number, number],
  radius: number,
  segments: number,
): PointType[] => {
  const points: PointType[] = [];

  for (let i = 0; i < segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    const x = center[0] + radius * Math.cos(theta);
    const y = center[1];
    const z = center[2] + radius * Math.sin(theta);

    points.push([x, y, z]);
  }

  return points;
};
