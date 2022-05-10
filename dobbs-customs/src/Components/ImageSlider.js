import React, { useState, useEffect } from "react";
import styled from "styled-components";

const IndicatorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${(props) => (props.isActive ? "orange" : "white")};
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  margin: 5px;
  transition: 750ms all ease-in-out;
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
`;

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <IndicatorWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </IndicatorWrapper>
  );
};

const OuterWrap = styled.div`
  margin-top: 50px;
  width: 100vw;

  @media only screen and (max-width: 1200px) {
    margin-top: 20px;
    margin-bottom: -20px;
  }
`;

const Wrapper = styled.div`
  height: 60vh;
  width: 50%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 750ms all ease-in-out;
`;

const ChildrenWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ImageSlider = ({
  images = [
    "/pictures/pic8.jpg",
    "/pictures/pic2.jpg",
    "/pictures/pic1.jpg",
    "/pictures/pic3.jpg",
    "/pictures/pic5.jpg",
    "/pictures/pic6.jpg",
    "/pictures/pic7.jpg",
    "/pictures/pic4.jpg",
    "/pictures/pic9.jpg",
  ],
  autoPlay = true,
  autoPlayTime = 5000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <OuterWrap>
      <Wrapper {...props}>
        {images.map((imageUrl, index) => (
          <Slide
            key={index}
            style={{
              backgroundImage: `url(${imageUrl})`,
              marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
            }}
          ></Slide>
        ))}
        <Gradient />
        <Indicator
          currentSlide={currentSlide}
          amountSlides={images.length}
          nextSlide={nextSlide}
        />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </Wrapper>
    </OuterWrap>
  );
};

export default ImageSlider;
