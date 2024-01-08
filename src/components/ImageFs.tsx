import gsap from "gsap";
import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

export const ImageFs = ({
  src,
  rect,
  destroy,
}: {
  src: string;
  rect: DOMRect;
  destroy: () => void;
}) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const onClickHandler = useCallback(
    (goBack?: boolean) => {
      gsap.fromTo(
        imgRef.current,
        {
          width: rect.width,
          height: rect.height,
          top: rect.top,
          left: rect.left,
          runBackwards: !!goBack,
          onComplete: () => {},
        },
        {
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          runBackwards: !!goBack,
          onComplete: () => {
            goBack && destroy();
          },
        },
      );
    },
    [rect, destroy],
  );

  useEffect(() => {
    if (imgRef.current) {
      onClickHandler();
    }
  }, [imgRef, onClickHandler]);

  return (
    <StyledWrapper $rect={rect}>
      <img
        src={src}
        ref={imgRef}
        alt="cat"
        onClick={() => onClickHandler(true)}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ $rect: DOMRect }>`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 2;

  & img {
    position: absolute;
    object-fit: cover;
    cursor: pointer;
  }
`;
