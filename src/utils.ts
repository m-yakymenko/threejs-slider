/** min and max included  */
export const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const parseNumber = (str: string) => Number(str.match(/\d+/)?.[0]) || 0;
