import styled from "styled-components";
import { Heading2, Text2 } from "../../styles/styles";

const ProductivityMain = styled.div``;
const ProductivityWrap = styled.div`
  position: relative;
  padding-bottom: 60px;
  @media only screen and (max-width: 479px) {
    padding-bottom: 30px;
  }
`;
const SectionHeading = styled.h2`
  margin: 0;
  ${Heading2}
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
`;
const LinearBg = styled.div`
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 374px;
  background-image: url("/images/productivity_bg.webp");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(208, 252, 255, 0.77) 50%,
      rgba(27, 173, 254, 0.4) 100%
    );
    z-index: -1;
  }
`;
const ProductivtyInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProductivityImage = styled.div`
  width: 100%;
  img {
    display: block;
    max-width: 100%;
  }
  @media only screen and (max-width: 768px) {
    margin: 16px 0;
  }
  @media only screen and (max-width: 479px) {
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding-top: 60px;
    padding-bottom: 70px;
    img {
      transform: scale(1.8);
    }
  }
`;
const ProductivityList = styled.div`
  max-width: 768px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 479px) {
    max-width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const ProductivityItem = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 479px) {
    width: 100%;
    padding: 12px;
  }
`;
const ProductivityNumber = styled.div`
  font-weight: 500;
  font-size: 48px;
  line-height: 55px;
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  color: ${({ theme }) => theme.colors.primary};
  @media only screen and (max-width: 479px) {
    font-size: 36px;
    line-height: 42px;
  }
`;
const ProductivityTextBlock = styled.div`
  margin-left: 16px;
  @media only screen and (max-width: 479px) {
    margin-left: 24px;
  }
`;
const ProductivityHead = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textColor};
  @media only screen and (max-width: 479px) {
    font-size: 18px;
    line-height: 20px;
  }
`;
const ProductivitySpan = styled.span`
  display: block;
  ${Text2}
  color: ${({ theme }) => theme.colors.manatee};
`;

const Circle = styled.div`
  min-height: 12px;
  min-width: 12px;
  background-image: url("/images/green_bubble.svg");
  background-position: center;
  background-repeat: no-repeat;
  @media only screen and (max-width: 479px) {
    display: none;
  }
`;

const ProductivityPara = styled.p`
  margin: 60px 0;
  max-width: 1000px;
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  @media only screen and (max-width: 768px) {
    margin: 40px 0;
    font-size: 22px;
    line-height: 28px;
  }
  @media only screen and (max-width: 479px) {
    margin: 40px 0 20px 0;
    font-size: 18px;
    line-height: 24px;
  }
`;

export {
  ProductivityMain,
  ProductivityWrap,
  ProductivtyInner,
  ProductivityImage,
  ProductivityList,
  ProductivityItem,
  ProductivityNumber,
  ProductivityTextBlock,
  ProductivityHead,
  ProductivitySpan,
  Circle,
  ProductivityPara,
  LinearBg,
  SectionHeading,
};
