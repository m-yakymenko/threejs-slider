import { FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/free-mode';
import { useQuery } from "react-query";
import { QueryKeys } from "./constans";
import { API } from "./api";
import { CatsItemType } from "./types";

export const CatsSwiper = () => {
  const { data: cats } = useQuery<CatsItemType[]>(QueryKeys.getCats, () => API.getCats);

  return (
    cats && <Swiper
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
