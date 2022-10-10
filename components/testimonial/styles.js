import styled from "styled-components";
import { Text1, Text2 } from "../../styles/styles";

const TestimonialWrap = styled.div`
  border-radius: 24px;
  .slider-wrapper {
    grid-template-columns: 1fr;
  }
  .slide {
    padding: 0;
    background-color: transparent;
  }
  .carousel.carousel-slider {
    overflow: visible;
  }
  .previous:hover {
    filter: contrast(100%);
  }
  @media only screen and (max-width: 768px) {
    .slider-wrapper {
      display: block;
    }
  }
`;
const LBtn = styled.div`
  min-width: 58px;
  min-height: 58px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  top: 50%;
  left: -25px;
  z-index: 100;
  border-radius: 50%;
  transform: translateY(-50%);
  @media only screen and (max-width: 768px) {
    min-width: 36px;
    min-height: 36px;
    left: -14px;
  }
  @media only screen and (max-width: 479px) {
    bottom: -36px;
    left: 38%;
    margin-left: -2px;
    top: auto;
  }
`;
const RBtn = styled.div`
  min-width: 58px;
  min-height: 58px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  top: 50%;
  right: -25px;
  z-index: 100;
  border-radius: 50%;
  transform: translateY(-50%);
  @media only screen and (max-width: 768px) {
    min-width: 36px;
    min-height: 36px;
    right: -14px;
  }
  @media only screen and (max-width: 479px) {
    bottom: -36px;
    right: 38%;
    margin-right: -2px;
    top: auto;
  }
`;
const SliderLeftChangeIcon = styled.div`
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    height: 24px;
    width: 24px;
    display: block;
  }
  @media only screen and (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;
const SliderRightChangeIcon = styled.div`
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    height: 24px;
    width: 24px;
    display: block;
  }
  @media only screen and (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;
const Slider = styled.div`
  width: 100%;
  height: 436px;
  border-radius: 24px;
  padding: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.one {
    background: linear-gradient(
        90deg,
        #735cd2 50%,
        rgba(115, 92, 210, 0.8) 100%
      ),
      url("/_next/static/media/61c586d50c499c853a70a764_foxhub_bg-2-1.5cbec89a.webp");
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &.two {
    background: linear-gradient(
        90deg,
        #d2b15c 50%,
        rgba(210, 177, 92, 0.8) 100%
      ),
      url("/_next/static/media/Treva.1ec4f6d0.webp");
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &.three {
    background: linear-gradient(
        90deg,
        #14c590 50%,
        rgba(20, 197, 144, 0.8) 100%
      ),
      url("/_next/static/media/aven.a6f5db9c.webp");
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media only screen and (max-width: 768px) {
    height: 100%;
    padding: 48px;
    flex-direction: column-reverse;
  }
  @media only screen and (max-width: 479px) {
    padding: 40px;
  }
`;
const SliderContent = styled.div`
  max-width: 60%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const SlideInnerImg = styled.div`
  @media only screen and (max-width: 479px) {
    width: 180px;
  }
`;
const SlideImage = styled.div`
  max-width: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 50px;
  }
`;
const ContentUpper = styled.div`
  p {
    ${Text2}
    text-align: left;
    margin: 0 0 24px 0;
    color: ${({ theme }) => theme.colors.whiteColor};
    :last-child {
      margin: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    p {
      ${Text1}
    }
  }
`;
const TestimonialName = styled.div`
  h5 {
    text-align: left;
    margin: 10px 0 0 0;
    font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.whiteColor};
  }
  span {
    ${Text2}
    color: ${({ theme }) => theme.colors.whiteColor};
  }
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    h5 {
      ${Text2}
    }
    span {
      ${Text1}
    }
  }
`;

export {
  TestimonialWrap,
  LBtn,
  RBtn,
  SliderLeftChangeIcon,
  SliderRightChangeIcon,
  Slider,
  SliderContent,
  SlideImage,
  ContentUpper,
  TestimonialName,
  SlideInnerImg,
};
