import styled from "styled-components";
import { Heading1, Heading3, Heading4, HeroPara, Text2, Text3 } from "./styles";

const FeatureBtnBlock = styled.div`
  margin-top: 32px;
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

const FeatureSection = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 20px;
    grid-gap: 24px;
  }
`;
const FeatureCard = styled.div`
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 30px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    box-shadow: 1px 1px 2px 0 rgb(0 0 0 / 5%);
    background-color: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 12px;
    transition: all 300ms;
    :hover {
      box-shadow: 3px 3px 20px 0 rgb(0 0 0 / 8%);
    }
  }
  @media only screen and (max-width: 768px) {
    a {
      padding: 16px;
      :hover {
        box-shadow: none;
      }
    }
  }
`;
const FeatureInnerCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const FeatureImageBlock = styled.div`
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 12px;
  }
`;
const FeatureContentBlock = styled.div`
  display: flex;
  align-items: flex-start;
`;
const LeftContentBlock = styled.div`
  display: flex;
  width: 94px;
  height: 94px;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
`;
const RightContentBlock = styled.div``;
const FeatureCardHead = styled.h2`
  display: inline-block;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.colors.textColor};
  ${Heading4}
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: capitalize;
`;
const FeatureCardPara = styled.p`
  margin: 0 0 12px 0;
  ${Text3}
  font-weight: 500;
  color: ${({ theme }) => theme.colors.romanSilver};
`;
const LearnMoreLink = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 6px;
    ${Text2}
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  }
`;
const FutureHeroSection = styled.div`
  padding: 156px 0 30px 0;
  @media only screen and (max-width: 768px) {
    padding: 136px 0px 30px 0;
  }
  @media only screen and (max-width: 749px) {
    padding: 120px 0px 20px 0;
  }
`;

const FeatureTop = styled.div`
  padding: 84px 0;
  @media only screen and (max-width: 768px) {
    padding: 64px 0;
  }
`;
const FeatureMainTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const FeatureHeading = styled.h1`
  margin: 0;
  ${Heading1}
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
`;
const FeaturePara = styled.p`
  margin: 0;
  ${HeroPara}
  text-align: center;
  color: ${({ theme }) => theme.colors.blackOlive};
  max-width: 680px;
  width: 100%;
  margin: 16px auto 32px auto;
  @media only screen and (max-width: 479px) {
    margin: 16px auto;
  }
`;
const FeatureBtn = styled.div`
  display: flex;
  align-items: center;
  button {
    :last-child {
      margin-left: 16px;
    }
  }
  @media only screen and (max-width: 479px) {
    flex-direction: column;
    justify-content: center;
    button {
      width: 220px;
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
const ScFeatureInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const ScFeatureLeft = styled.div`
  width: 50%;
  flex: 0 0 50%;
  padding: 0 64px 0 48px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex: 0 0 100%;
    padding: 30px 0 0 0;
  }
`;
const ScFeatureRight = styled.div`
  width: 50%;
  flex: 0 0 50%;
  padding-left: 16px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex: 0 0 100%;
    padding-left: 0;
  }
`;
const ScFeatureBlock = styled.div`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.ghostWhite};
  :nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.whiteColor};
    ${ScFeatureInner} {
      flex-direction: row-reverse;
      @media only screen and (max-width: 768px) {
        flex-direction: column-reverse;
      }
    }
    ${ScFeatureRight} {
      padding-left: 0;
      padding-right: 16px;
      @media only screen and (max-width: 768px) {
        padding-right: 0;
      }
    }
    ${ScFeatureLeft} {
      padding: 0 48px 0 64px;
      @media only screen and (max-width: 768px) {
        padding: 30px 0 0 0;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 50px 0;
  }
  @media only screen and (max-width: 749px) {
    padding: 30px 0;
  }
`;
const FeatureSubHeading = styled.h2`
  margin: 0;
  ${Heading4}
  color: ${({ theme }) => theme.colors.textColor};
`;
const FeatureSubPara = styled.p`
  margin: 12px 0 16px 0;
  ${Text2}
  color: ${({ theme }) => theme.colors.romanSilver};
  @media only screen and (max-width: 768px) {
    margin: 12px 0;
  }
`;
const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 24px 0 0 0;
`;
const FeatureListItem = styled.li`
  padding-left: 25px;
  margin: 0 0 12px 0;
  ${Text3}
  color: ${({ theme }) => theme.colors.textColor};
  background-image: url("/images/blue_checked.svg");
  background-repeat: no-repeat;
  background-position: 0 2px;
  :last-child {
    margin: 0;
  }
`;
const FeatureRichText = styled.div`
  h2 {
    margin: 20px 0 10px 0;
    ${Heading3}
    color: ${({ theme }) => theme.colors.lightDark};
  }
  h3 {
    margin: 20px 0 10px 0;
    ${Heading4}
    color: ${({ theme }) => theme.colors.lightDark};
  }
  p {
    ${Text2}
    color: ${({ theme }) => theme.colors.romanSilver};
    margin: 0 0 10px 0;
    strong {
      color: ${({ theme }) => theme.colors.lightDark};
    }
  }
  &.PT60 {
    padding: 60px 0 0 0;
  }
`;
const CustomBlock = styled.div`
  max-width: 380px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;
const CustomCard = styled.div`
  display: flex;
  width: 120px;
  padding: 16px 10px;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: 4px 4px 18px 0 rgb(0 0 0 / 6%);
  @media only screen and (max-width: 479px) {
    width: 100%;
    padding: 10px 8px;
  }
`;
const CustomSpan = styled.span`
  margin-top: 10px;
  ${Text3}
  color: ${({ theme }) => theme.colors.Onyx};
`;
const RecordSpan = styled.span`
  margin-top: 2px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.romanSilver};
`;

export {
  FeatureBtnBlock,
  FeatureSection,
  FeatureCard,
  FeatureInnerCard,
  FeatureImageBlock,
  FeatureContentBlock,
  LeftContentBlock,
  RightContentBlock,
  FeatureCardHead,
  FeatureCardPara,
  LearnMoreLink,
  FutureHeroSection,
  FeatureTop,
  FeatureMainTop,
  FeatureHeading,
  FeaturePara,
  FeatureBtn,
  ScFeatureBlock,
  ScFeatureInner,
  ScFeatureLeft,
  ScFeatureRight,
  FeatureSubHeading,
  FeatureSubPara,
  FeatureList,
  FeatureListItem,
  FeatureRichText,
  CustomBlock,
  CustomCard,
  CustomSpan,
  RecordSpan,
};
