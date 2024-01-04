import { FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/free-mode';
import { useCatstore } from "./store";

export const CatsSwiper = () => {
  const { cats } = useCatstore.getState()

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={100}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"
      onSliderMove={(swiper, event) => {
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
