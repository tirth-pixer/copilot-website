import styled, { css } from "styled-components";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading5,
  HeroPara,
  Text1,
  Text2,
  Text3,
} from "./styles";

const BlogHeroSection = styled.div`
  height: 338px;
  width: 100%;
  position: relative;
  margin-bottom: 50px;
  @media only screen and (max-width: 479px) {
    margin-bottom: 30px;
  }
`;
const ImageBlock = styled.div``;
const BlogOverLayBlock = styled.div`
  position: absolute;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.6);
`;
const BlogWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
  @media only screen and (max-width: 479px) {
    margin-top: 30px;
  }
`;

const BlogMainBlock = styled.div`
  position: relative;
`;
const BlogDetailLeft = styled.div`
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  padding-right: 25px;
  @media only screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 0;
  }
`;
const BlogDetailRight = styled.div`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding-left: 25px;
  @media only screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding-left: 0;
    padding-bottom: 30px;
  }
  @media only screen and (max-width: 479px) {
    padding-bottom: 18px;
  }
`;
const BlogProgressCard = styled.div`
  position: sticky;
  top: 120px;
`;
const BlogDetailHeading = styled.h2`
  ${Heading2}
  margin: 16px 0 22px 0;
  max-width: 720px;
  width: 100%;
  color: ${({ theme }) => theme.colors.lightDark};
`;
const BlogSocialList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;
const BlogSocialItem = styled.li`
  height: 32px;
  width: 32px;
  margin: 0 12px 0 0;
  border-radius: 50%;
  a {
    display: inline-block;
    transform: scale(1);
    transition: all 300ms;
    :hover {
      transform: scale(1.1);
    }
  }
`;
const TableContent = styled.span`
  display: block;
  ${Text1}
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.darkGray};
  @media only screen and (max-width: 768px) {
    ${Text2}
    font-weight: 700;
  }
`;

const TableContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0 0 0;
  @media only screen and (max-width: 479px) {
    margin: 20px 0 0 0;
  }
`;
const TableContentItem = styled.li`
  ${Text2}
  margin: 0 0 20px 0;
  padding: 0 0 0 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textColor};
  background-image: url("/images/circle.svg");
  background-repeat: no-repeat;
  background-position: 0 4px;
  a {
    color: ${({ theme }) => theme.colors.textColor};
  }
  &.done {
    background-image: url("/images/blue_checkbox.svg");
    background-repeat: no-repeat;
    background-position: 0 4px;
  }
  &.progress {
    background-image: url("/images/progress_icon.svg");
    background-repeat: no-repeat;
    background-position: 0 4px;
  }
  @media only screen and (max-width: 768px) {
    ${Text2}
    margin: 0 0 16px 0;
  }
`;
const BlogTop = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto 80px auto;
  @media only screen and (max-width: 479px) {
    margin: 0 auto 50px auto;
  }
`;
const BlogHeroHeading = styled.h1`
  margin: 0;
  ${Heading1}
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
`;
const BlogHeroBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 32px;
  @media only screen and (max-width: 991px) {
    grid-gap: 16px;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  &.slides {
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    transition: opacity 800ms;
    z-index: 0;
  }

  &.slides.active {
    opacity: 1;
    z-index: 11;
    position: relative;
  }
`;
const BlogSlideMain = styled.div`
  position: relative;
`;
const BlogPara = styled.p`
  margin: 16px 0 0 0;
  ${HeroPara}
  color: ${({ theme }) => theme.colors.blackOlive};
  text-align: center;
`;
const BlogLeft = styled.div`
  width: 100%;
  text-align: center;
  .blog-image {
    border-radius: 6px;
  }
`;

const BlogRight = styled.div`
  width: 100%;
  padding: 0 48px;
  @media only screen and (max-width: 991px) {
    padding: 0 24px;
  }
  @media only screen and (max-width: 768px) {
    padding: 32px 0 0 0;
  }
`;
const BlogSubHeading = styled.h2`
  margin: 14px 0 10px 0;
  ${Heading3}
  color: ${({ theme }) => theme.colors.textColor};
`;
const BlogSubPara = styled.p`
  margin: 0 0 32px 0;
  ${Text2}
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.blackOlive};
  @media only screen and (max-width: 479px) {
    margin: 0 0 24px 0;
  }
`;
const SliderBtnBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0 0 0;
  @media only screen and (max-width: 479px) {
    margin: 24px 0 0 0;
  }
`;
const PreviousBtn = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  transition: all 300ms;
  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    svg {
      path {
        fill: ${({ theme }) => theme.colors.whiteColor};
      }
    }
  }
`;
const NextBtn = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  transition: all 300ms;
  svg {
    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    svg {
      path {
        fill: ${({ theme }) => theme.colors.whiteColor};
      }
    }
  }
`;
const SliderindexSpan = styled.span`
  ${Text3}
  color: ${({ theme }) => theme.colors.lightDark};
  margin: 0 12px;
`;
const BlogWrapperBlock = styled.div`
  padding: 50px 0 120px 0;
  @media only screen and (max-width: 768px) {
    padding: 0 0 80px 0;
  }
  @media only screen and (max-width: 479px) {
    padding: 0 0 60px 0;
  }
`;
const BlogWrap = styled.div`
  max-width: 1036px;
  width: 100%;
  margin: 0 auto 80px auto;
  :last-child {
    margin: auto;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 auto 50px auto;
  }
`;
const BlogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const BlogCategoryHeading = styled.h2`
  margin: 0;
  ${Heading3}
  color: ${({ theme }) => theme.colors.lightDark};
`;
const ViewAllLink = styled.div`
  a {
    color: ${({ theme }) => theme.colors.primary};
    span {
      font-size: 16px;
      line-height: 20px;
      margin-right: 6px;
    }
  }
`;
const CategoryWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2px;
  margin: 0 -10px;
  &.category {
    grid-column-gap: 2px;
    grid-row-gap: 16px;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 479px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;
const CategoryDetail = styled.div`
  max-width: 1035px;
  width: 100%;
  margin: auto;
`;
const CateHeading = styled.h2`
  margin: 0;
  ${Heading3}
  color: ${({ theme }) => theme.colors.lightDark};
`;
const CateBlock = styled.div`
  margin: 50px 0 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(195px, 1fr));
  grid-gap: 15px;
  @media only screen and (max-width: 479px) {
    margin: 30px 0 0 0;
  }
`;
const CateCard = styled.div`
  padding: 20px;
  border-radius: 8px;
  ${(props) =>
    props.lightblue
      ? css`
          background-color: #e9f2fe;
        `
      : props.pink
      ? css`
          background-color: #f6e4eb;
        `
      : props.lightGreen
      ? css`
          background-color: #f1f6ea;
        `
      : props.orange
      ? css`
          background-color: #fdecdd;
        `
      : props.darkgreen
      ? css`
          background-color: #eaefeb;
        `
      : ""}
  h3 {
    margin: 30px 0 10px 0;
    ${Heading5}
    color: ${({ theme }) => theme.colors.textColor};
    @media only screen and (max-width: 479px) {
      margin: 10px 0;
    }
  }
  p {
    margin: 0;
    ${Text3}
    color: ${({ theme }) => theme.colors.romanSilver};
  }
`;
const CategoryWrapper = styled.div`
  margin: 80px 0 0 0;
  @media only screen and (max-width: 768px) {
    margin: 50px 0 0 0;
  }
  @media only screen and (max-width: 479px) {
    margin: 30px 0 0 0;
  }
`;

export {
  BlogHeroSection,
  ImageBlock,
  BlogOverLayBlock,
  BlogWrapper,
  BlogMainBlock,
  BlogDetailLeft,
  BlogDetailRight,
  BlogDetailHeading,
  BlogSocialList,
  BlogSocialItem,
  TableContent,
  TableContentList,
  TableContentItem,
  BlogProgressCard,
  BlogHeroBlock,
  BlogTop,
  BlogHeroHeading,
  BlogPara,
  BlogLeft,
  BlogRight,
  BlogSubHeading,
  BlogSubPara,
  SliderBtnBlock,
  PreviousBtn,
  SliderindexSpan,
  NextBtn,
  BlogWrapperBlock,
  BlogWrap,
  BlogHeader,
  BlogCategoryHeading,
  ViewAllLink,
  CategoryWrap,
  CategoryDetail,
  CateHeading,
  CateBlock,
  CateCard,
  CategoryWrapper,
  BlogSlideMain,
};
