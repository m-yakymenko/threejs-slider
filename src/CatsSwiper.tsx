import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQueryCat } from "./hooks/hook";
import { useCatstore } from "./store";

export const CatsSwiper = () => {
  const cats = useQueryCat()

  const { setSwiper } = useCatstore()

  const onInitResizeHandler = (swiper: any) => {
    const { slidesGrid, slidesSizesGrid, translate, height } = swiper
    console.log(swiper);


    setSwiper({
      slidesGrid,
      slidesSizesGrid,
      translate,
      height,
      spaceBetween: swiper.passedParams.spaceBetween
    })
  }

  return (
    cats && <Swiper
      slidesPerView={3}
      spaceBetween={100}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"

      onInit={onInitResizeHandler}
      onResize={onInitResizeHandler}

      onSliderMove={(swiper) => {
        console.log(swiper.translate, swiper);
      }}
    >
      {cats.map((cat, i) => (
        <SwiperSlide key={i}>
          <img src={cat.url} alt="cat" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
