import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useQueryCat } from "./hooks/hooks";
import { state } from "./store/state";
import { useCatstore } from "./store/store";

const observer = new MutationObserver(([{ target }]) => {
  const transform = (target as HTMLUListElement).style.transform;
  const value = transform.match(/\((.+)px/)?.[1];
  state.position = value ? +value : 0;
});

export const CatsSwiper = () => {
  const cats = useQueryCat();

  const { setSwiper } = useCatstore();
  const sliredRef = useRef<any>(null);

  const onInitHandler = () => {
    console.log(sliredRef);

    observer.observe(
      document.querySelector<HTMLUListElement>(".splide__list")!,
      {
        attributes: true,
      },
    );

    setTimeout(() => {
      setSwiper({
        slidesGrid: sliredRef.current.slides.map(
          (slide: HTMLLIElement, index: number) =>
            slide.clientWidth * index + sliredRef.current.options.gap * index,
        ),
        slidesSizesGrid: sliredRef.current.slides.map(
          (slide: HTMLLIElement) => slide.clientWidth,
        ),
        translate: 0,
        height: window.innerHeight * 0.8,
        spaceBetween: sliredRef.current.options.gap,
      });
    }, 100);
  };

  useEffect(() => {
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    cats && (
      <Splide
        ref={sliredRef}
        style={{
          position: "relative",
          cursor: "grab",
        }}
        options={{
          perPage: 3,
          gap: window.innerWidth / 10,
          pagination: false,
          arrows: false,
          drag: "free",
        }}
        onReady={onInitHandler}
      >
        {cats.map((cat, i) => (
          <SplideSlide key={i}>
            <ImageWrapper>
              <img src={cat.url} alt="cat" />
            </ImageWrapper>
          </SplideSlide>
        ))}
      </Splide>
    )
  );
};

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.sizes.sliderHeight};

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
