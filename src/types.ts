export type PointType = [number, number, number];

export type SlidesSizesGridType = {
  width: number;
  height: number;
  top: number;
};

export type CatItemType = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type SliderDataType = {
  slidesGrid: number[];
  slidesSizesGrid: SlidesSizesGridType[];
  translate: number;
  height: number;
  spaceBetween: number;
};
