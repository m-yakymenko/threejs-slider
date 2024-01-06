export const getPointForCircleCurve = (center: [number, number, number], radius: number, segments: number): [number, number, number,][] => {
  const points = [];

  for (let i = 0; i < segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    const x = center[0] + radius * Math.cos(theta);
    const y = center[1];
    const z = center[2] + radius * Math.sin(theta);

    points.push([x, y, z] as [number, number, number]);
  }

  // Close the curve by adding the first point to the end
  //points.push(points[0]);

  return points;
}
