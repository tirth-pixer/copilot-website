import styled, { css } from "styled-components";
import { Heading1, Heading3, HeroPara, Text1, Text2 } from "./styles";

const Scfeaturetitle = styled.div`
  max-width: 720px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FeatureTag = styled.div`
  padding: 3px 12px;
  display: inline-flex;
  border-radius: 26px;
  background-color: ${({ theme }) => theme.colors.lightBg};
  span {
    ${Text2}
    color: ${({ theme }) => theme.colors.manatee};
  }
`;
const SectionHeading = styled.h2`
  margin: 16px 0 0 0;
  ${Heading3}
  text-align: center;
  color: ${({ theme }) => theme.colors.texrColor};
`;
const FeatureWrapBlock = styled.div`
  width: 100%;
  max-width: 896px;
  margin: 14px auto 0 auto;
  @media only screen and (max-width: 768px) {
    margin: 24px 0 0 0;
  }
`;
const FeatureBlock = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -16px;
  @media only screen and (max-width: 768px) {
    margin: 0 -12px;
  }
  @media only screen and (max-width: 479px) {
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }
`;
const LearnMoreLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0 0 0;
  opacity: 0;
  transition: all 300ms;
  span {
    ${Text2};
    font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
    margin: 0 6px 0 0;
    color: ${({ theme }) => theme.colors.primary};
  }
  @media only screen and (max-width: 768px) {
    opacity: 1;
  }
  @media only screen and (max-width: 479px) {
    span {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
const FeatureImg = styled.div`
  text-align: center;
  transition: all 300ms;
`;
const FeatureCardTitle = styled.h3`
  margin: 16px 0 0 0;
  ${Text2}
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  transition: all 300ms;
  @media only screen and (max-width: 479px) {
    margin: 10px 0 0 0;
    font-size: 14px;
    line-height: 20px;
  }
`;
const FeatureItem = styled.li`
  padding: 16px;
  margin-bottom: 0;
  a {
    max-width: 200px;
    min-width: 200px;
    width: 100%;
    height: 200px;
    display: block;
    text-decoration: none;
    padding: 20px 16px;
    border-radius: 12px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.lotion};
    border: 1px solid transparent;
    transition: all 300ms ease-in-out;
    :hover {
      border: 1px solid ${({ theme }) => theme.colors.borderColor};
      background-color: ${({ theme }) => theme.colors.whiteColor};
      box-shadow: var(--shadowCard);
      ${FeatureImg} {
        transform: translate3d(0, -12px, 0);
      }
      ${FeatureCardTitle} {
        transform: translate3d(0, -20px, 0);
      }
      ${LearnMoreLink} {
        opacity: 1;
        transform: translate3d(0, -23px, 0);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 12px;
    a {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      height: auto;
      :hover {
        border: 1px solid transparent;
        background-color: ${({ theme }) => theme.colors.lotion};
        box-shadow: none;
        ${FeatureImg} {
          transform: translate3d(0, 0, 0);
        }
        ${FeatureCardTitle} {
          transform: translate3d(0, 0, 0);
        }
        ${LearnMoreLink} {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    }
  }
  @media only screen and (max-width: 479px) {
    padding: 0;
  }
`;
const FeatureLinkBlock = styled.div``;

const HeroSection = styled.div`
  width: 100%;
  padding: 156px 0 84px 0;
  background-image: url("/images/Frame-1-figma-1.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    padding: 136px 0 84px 0;
  }
  @media only screen and (max-width: 479px) {
    padding: 120px 0 40px 0;
  }
`;

const HeroMainBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

const HeroLeft = styled.div`
  max-width: 534px;
  width: 100%;
  margin: 24px 35px 24px 0;
  @media only screen and (max-width: 991px) {
    max-width: 100%;
    margin: 0 0 24px 0;
  }
`;
const HeroHeading = styled.h1`
  ${Heading1}
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0 0 24px 0;
  @media only screen and (max-width: 991px) {
    text-align: center;
  }
`;

const Para = styled.p`
  ${HeroPara}
  margin: 0;
  color: ${({ theme }) => theme.colors.blackOlive};
  @media only screen and (max-width: 991px) {
    text-align: center;
    ${Text1}
  }
`;

const HeroBtnBlock = styled.div`
  margin-top: 48px;
  button {
    :last-child {
      margin-left: 16px;
    }
  }
  @media only screen and (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
  }
  @media only screen and (max-width: 479px) {
    flex-direction: column;
    margin-top: 16px;
    button {
      max-width: 220px;
      width: 100%;
      a {
        width: 100%;
      }
      :last-child {
        margin-left: 0;
        margin-top: 12px;
      }
    }
  }
`;

const HeroRight = styled.div`
  position: relative;
  transform: translate(80px);
  @media only screen and (max-width: 991px) {
    transform: translate(0);
  }
`;

const MainModal = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const EmailModal = styled.div`
  position: absolute;
  left: -60px;
  top: 86px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SmsModal = styled.div`
  position: absolute;
  top: 71px;
  right: -54px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const CallModal = styled.div`
  position: absolute;
  right: 0;
  bottom: -28px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const PlayIcon = styled.div`
  display: flex;
`;

const PlayerWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -25%);
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 48px 0 rgb(0 0 0 / 32%);
  @media only screen and (max-width: 479px) {
    height: 48px;
    width: 48px;
    ${PlayIcon} {
      width: 12px;
    }
  }
`;

const LightBox = styled.div`
  background-color: fade(black, 80%);
  overflow: scroll;
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 999;
  ${(props) =>
    props.isLightBox &&
    css`
      display: flex;
    `}
`;

const LightBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 960px;
  width: 100%;
  margin: 7% auto;
  padding: 0 3%;
  height: auto;
  z-index: 10;
`;
const VideoContainer = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  padding-top: 30px;
  overflow: hidden;
  height: 0;
  iframe {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
`;
const CloseButton = styled.button`
  padding: 16px 0;
  margin-left: auto;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.whiteColor};
  @media only screen and (max-width: 991px) {
    font-size: 24px;
    padding: 12px 0;
  }
`;
const Iframe = styled.iframe``;

export {
  Scfeaturetitle,
  FeatureTag,
  SectionHeading,
  FeatureBlock,
  FeatureItem,
  FeatureLinkBlock,
  FeatureImg,
  FeatureCardTitle,
  LearnMoreLink,
  FeatureWrapBlock,
  HeroSection,
  HeroMainBlock,
  HeroLeft,
  HeroHeading,
  Para,
  HeroBtnBlock,
  HeroRight,
  MainModal,
  PlayerWrapper,
  EmailModal,
  SmsModal,
  CallModal,
  PlayIcon,
  LightBox,
  LightBoxContainer,
  VideoContainer,
  CloseButton,
  Iframe,
};
