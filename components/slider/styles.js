import styled, { css } from "styled-components";
import { Heading1, Heading3, Text1, Text2 } from "../../styles/styles";

const SliderMain = styled.div`
  width: 100%;
  overflow: hidden;
`;
const SliderWrap = styled.div``;
const SliderTopMain = styled.div`
  padding-left: 100px;
  @media only screen and (max-width: 991px) {
    padding-left: 50px;
  }
  @media only screen and (max-width: 768px) {
    padding-left: 10px;
  }
  @media only screen and (max-width: 479px) {
    padding-left: 0;
  }
`;
const SliderTop = styled.div`
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const SliderHeading = styled.h2`
  margin: 0;
  ${Heading1}
`;
const SliderTopSvg = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const SpanImage = styled.div`
  transform: rotate(6deg) translate(9px, 16px);
  @media only screen and (max-width: 768px) {
    margin-top: 12px;
    transform: rotate(0) translate(0px, 0px);
  }
  @media only screen and (max-width: 768px) {
    width: 300px;
    margin-top: 6px;
  }
`;
const SpanBlock = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 0 0 16px;
  span {
    font-family: "Nanum Pen Script";
    display: block;
    padding-left: 30px;
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
    transition: all 300ms ease-in-out;
    &.first {
      color: #00a2e0;
    }
    &.second {
      color: #70bc95;
    }
    &.third {
      color: #735cd2;
    }
    &.fourth {
      color: #ff6b6b;
    }
  }
  @media only screen and (max-width: 991px) {
    span {
      font-size: 28px;
      line-height: 32px;
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;
const TabWrapper = styled.div`
  position: relative;
  margin: 14px 0 0 0;
  ::before {
    content: "";
    position: absolute;
    height: 76px;
    width: 100%;
    z-index: 1;
    pointer-events: none;
    right: calc(100% - 45px);
    background: linear-gradient(90deg, #fff 90%, hsla(0, 0%, 100%, 0));
  }
  ::after {
    content: "";
    position: absolute;
    height: 76px;
    width: 100%;
    z-index: 1;
    pointer-events: none;
    top: 6px;
    left: calc(100% - 100px);
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff 20%);
  }
  @media only screen and (max-width: 768px) {
    margin: 24px 0 0 0;
    ::before {
      height: 50px;
    }
    ::after {
      height: 50px;
    }
  }
  @media only screen and (max-width: 479px) {
    margin: 12px 0 0 0;
    ::before {
      display: none;
    }
    ::after {
      display: none;
    }
  }
`;
const SliderMenuWrap = styled.ul`
  list-style: none;
  padding: 0;
  width: 4000px;
  display: flex;
  transition: all 300ms ease-in-out;
  &.first {
    transform: translate(0);
  }
  &.second {
    transform: translate(-400px);
  }
  &.third {
    transform: translate(-962.723px);
  }
  &.fourth {
    transform: translate(-1398px);
  }
  @media only screen and (max-width: 991px) {
    &.first {
      transform: translate(0);
    }
    &.second {
      transform: translate(-214px);
    }
    &.third {
      transform: translate(-586.482px);
    }
    &.fourth {
      transform: translate(-874.134px);
    }
  }
  @media only screen and (max-width: 479px) {
    &.first {
      transform: translate(0);
    }
    &.second {
      transform: translate(-136px);
    }
    &.third {
      transform: translate(-389.366px);
    }
    &.fourth {
      transform: translate(-611.107px);
    }
  }
`;
const SliderTabMenu = styled.li`
  margin: 0 40px 0 0;
  cursor: pointer;
  :first-child {
    margin: 0 40px 0 100px;
  }
  h3 {
    margin: 0;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
    color: ${({ theme }) => theme.colors.disable};
    transition: all 300ms ease-in-out;
    &.first {
      color: #00a2e0;
    }
    &.second {
      color: #70bc95;
    }
    &.third {
      color: #735cd2;
    }
    &.fourth {
      color: #ff6b6b;
    }
  }
  @media only screen and (max-width: 991px) {
    :first-child {
      margin: 0 24px 0 50px;
    }
    h3 {
      font-size: 32px;
      line-height: 42px;
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 0 20px 0 0;
    :first-child {
      margin: 0 20px 0 10px;
    }
    h3 {
      font-size: 32px;
      line-height: 42px;
    }
  }
  @media only screen and (max-width: 479px) {
    margin: 0 10px 0 0;
    :first-child {
      margin: 0 10px 0 0;
    }
    h3 {
      font-size: 24px;
      line-height: 28px;
    }
  }
`;

const SliderContentTab = styled.div`
  margin-top: 56px;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  @media only screen and (max-width: 991px) {
    margin-top: 42px;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 26px;
  }
`;
const SliderTab = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  flex: 1 0 100%;
  border-radius: 24px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  &.first {
    background-color: #00a2e0;
    position: relative;
  }
  &.second {
    background-color: #70bc95;
  }
  &.third {
    background-color: #735cd2;
  }
  &.fourth {
    background-color: #ff6b6b;
  }
  ${(props) =>
    props.first &&
    css`
      opacity: 1;
      z-index: 4;
    `}
  ${(props) =>
    props.second &&
    css`
      opacity: 1;
      z-index: 4;
    `}
    ${(props) =>
    props.third &&
    css`
      opacity: 1;
      z-index: 4;
    `}
    ${(props) =>
    props.fourth &&
    css`
      opacity: 1;
      z-index: 4;
    `}
`;
const SliderContentTop = styled.div`
  padding: 64px 100px 28px 100px;
  display: flex;
  @media only screen and (max-width: 991px) {
    padding: 56px 56px 28px 56px;
  }
  @media only screen and (max-width: 768px) {
    padding: 28px 28px 12px 28px;
    flex-direction: column;
  }
`;
const SliderContentBottom = styled.div`
  padding: 0 15px 7px 15px;
  @media only screen and (max-width: 768px) {
    padding: 0 0 5px 0;
  }
`;
const SliderTopLeft = styled.div`
  max-width: 50%;
  width: 100%;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 24px;
  }
`;
const SliderTag = styled.div`
  padding: 2px 8px;
  background: rgba(0, 0, 0, 0.12);
  border-radius: 24px;
  display: inline-flex;
  span {
    ${Text1}
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;
const SliderTopRight = styled.div`
  max-width: 50%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    justify-content: flex-start;
  }
`;
const SliderContentHeading = styled.h2`
  margin: 16px 0;
  ${Heading3}
  color: ${({ theme }) => theme.colors.whiteColor};
  @media only screen and (max-width: 768px) {
    margin: 12px 0;
  }
`;
const SliderContentSpan = styled.span`
  display: block;
  ${Text2}
  color: ${({ theme }) => theme.colors.lightGray};
`;
const SliderContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const SliderContentListItem = styled.li`
  margin: 0 0 16px 0;
  padding: 0 0 0 40px;
  ${Text1}
  color: ${({ theme }) => theme.colors.whiteColor};
  background-image: url("/images/icon-check.svg");
  background-repeat: no-repeat;
  @media only screen and (max-width: 749px) {
    background-size: 18px;
    padding: 0 0 0 30px;
    background-position: 0 5px;
  }
`;

export {
  SliderMain,
  SliderWrap,
  SliderTop,
  SliderHeading,
  SpanBlock,
  SliderTopMain,
  SliderMenuWrap,
  SliderTabMenu,
  SliderContentTab,
  SliderTab,
  SliderContentTop,
  SliderContentBottom,
  SliderTopLeft,
  SliderTopRight,
  SliderTag,
  SliderContentHeading,
  SliderContentSpan,
  SliderContentList,
  SliderContentListItem,
  TabWrapper,
  SpanImage,
  SliderTopSvg,
};
