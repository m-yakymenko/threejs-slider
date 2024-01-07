import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CanvasS } from "./canvas/canvas";
import { useQueryCat } from "./hooks/hooks";
import { useCatstore } from "./store/store";

export const CatsSwiper = () => {
  const cats = useQueryCat();

  const { setSwiper } = useCatstore();

  const onInitHandler = (swiper: any) => {
    const { slidesGrid, slidesSizesGrid, translate, height } = swiper;
    setSwiper({
      slidesGrid,
      slidesSizesGrid,
      translate,
      height,
      spaceBetween: swiper.passedParams.spaceBetween,
    });
  };

  const onChangeHandler = (swiper: any) => {
    //state.sliderTranslate = swiper.translate;
  };

  return (
    cats && (
      <Swiper
        slidesPerView={3}
        spaceBetween={100}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        onInit={onInitHandler}
        onResize={onInitHandler}
        onSliderMove={onChangeHandler}
        onSlideChangeTransitionEnd={onChangeHandler}
        onScroll={onChangeHandler}
        onTransitionEnd={onChangeHandler}
      >
        {cats.map((cat, i) => (
          <SwiperSlide key={i}>
            <img src={cat.url} alt="cat" />
          </SwiperSlide>
        ))}

        <CanvasS />
      </Swiper>
    )
  );
};
