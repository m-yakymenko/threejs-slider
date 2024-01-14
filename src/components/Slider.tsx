import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { memo, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import { regExpFindPositionByPixel } from "../constans";
import { getSlideGap, getSlideHeight } from "../helpers";
import { useQueryCat } from "../hooks/hooks";
import { state } from "../store/state";
import { CatsStateInterface, useCatstore } from "../store/store";
import { theme } from "../styles/theme";
import { CatItemType } from "../types";
import { parseNumber, randomIntFromInterval } from "../utils";
import { FeDisplacementMap } from "./FeDisplacementMap";
import { ImageFs } from "./ImageFs";

const sliderPositionObserver = new MutationObserver(([{ target }]) => {
  const transform = (target as HTMLUListElement).style.transform;
  const value = transform.match(regExpFindPositionByPixel)?.[1];
  state.position = value ? parseFloat(value) : 0;
});

export const CatsSlider = () => {
  const cats = useQueryCat();
  const { setSlider, setImgRect, showFeDisplacementMap } = useCatstore();

  const [isScrolling, setIsScrolling] = useState(false);
  const sliredRef = useRef<typeof Splide>(null);

  const onReadyHandler = () => {
    sliderPositionObserver.observe(
      document.querySelector<HTMLUListElement>(".splide__list")!,
      {
        attributes: true,
      },
    );

    // hack because slider is empty when onReady
    setTimeout(() => {
      setSlider({
        slidesGrid: sliredRef.current.slides.map(
          (slide: HTMLLIElement, index: number) =>
            slide.clientWidth * index + getSlideGap() * index,
        ),
        slidesSizesGrid: sliredRef.current.slides.map(
          (slide: HTMLLIElement) => {
            const img = slide.querySelector("img")!;
            return {
              width: slide.clientWidth,
              height: img.clientHeight,
              top: parseNumber(img.style.marginTop),
            };
          },
        ),
        translate: 0,
        height: window.innerHeight * 0.8,
        spaceBetween: getSlideGap(),
      });
    }, 100);
  };

  useEffect(() => {
    return () => {
      sliderPositionObserver.disconnect();
    };
  }, []);

  if (!cats?.length) return null;

  return (
    <>
      {isScrolling && showFeDisplacementMap && <FeDisplacementMap />}
      <Splide
        ref={sliredRef}
        options={{
          perPage: 4,
          gap: "10vw",
          breakpoints: {
            640: {
              perPage: 2,
            },
          },
          pagination: false,
          arrows: false,
          drag: "free",
        }}
        onReady={onReadyHandler}
        onResize={onReadyHandler}
        onDrag={() => setIsScrolling(true)}
        onDragged={() => setIsScrolling(false)}
      >
        {cats.map((cat, i) => (
          <SplideSlide key={i}>
            <SlideImage cat={cat} setImgRect={setImgRect}></SlideImage>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

const SlideImage = memo(
  ({
    cat,
    setImgRect,
  }: {
    cat: CatItemType;
    setImgRect: CatsStateInterface["setImgRect"];
  }) => {
    const [imgRect, setimgRect] = useState<DOMRect | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setImgRect(imgRect);
    }, [imgRect, setImgRect]);

    useEffect(() => {
      !cat.url && setIsLoaded(false);
    }, [cat.url]);

    return (
      <ImageWrapper $isLoading={!isLoaded}>
        <img
          src={cat.url}
          alt="cat"
          onClick={(event) =>
            setimgRect((event.target as HTMLImageElement).getClientRects()[0])
          }
          style={{
            opacity: isLoaded ? 1 : 0,
            maxHeight: cat.height,
            marginTop: randomIntFromInterval(0, getSlideHeight() / 2),
          }}
          onLoad={() => setIsLoaded(true)}
        />

        {imgRect &&
          createPortal(
            <ImageFs
              src={cat.url}
              rect={imgRect}
              destroy={() => setimgRect(null)}
            />,
            document.getElementById("image-fs-wrapper-portal")!,
          )}
      </ImageWrapper>
    );
  },
);

const ImageWrapper = styled.div<{ $isLoading: boolean }>`
  width: 100%;
  height: ${theme.sizes.sliderHeightVH}vh;

  ${(props) =>
    props.$isLoading &&
    css`
      background: linear-gradient(
        ${theme.primary.bgColor},
        ${theme.primary.bgColorBright}
      );
      opacity: 0.4;
    `}

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
