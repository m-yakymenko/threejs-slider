import { FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/free-mode';
import { useQuery } from "react-query";
import { QueryKeys } from "./constans";
import { API } from "./api";
import { CatsItemType } from "./types";
import { useCatstore } from "./store";

export const CatsSwiper = () => {
  const { data: cats } = useQuery<CatsItemType[]>(QueryKeys.getCats, () => API.getCats);
  const { setSwiper } = useCatstore()

  return (
    cats && <Swiper
      slidesPerView={3}
      spaceBetween={100}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"
      onSliderMove={(swiper) => {
        console.log(swiper.translate, swiper);
      }}
      onInit={(swiper: any) => {
        const { slidesGrid, slidesSizesGrid, translate, height } = swiper
        console.log(swiper);


        setSwiper({
          slidesGrid,
          slidesSizesGrid,
          translate,
          height,
          spaceBetween: swiper.passedParams.spaceBetween
        })
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
