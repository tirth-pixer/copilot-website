import styled from "styled-components";
import { Heading1, HeroPara, Text3 } from "../../styles/styles";

const SolutionHeroWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 828px) {
    flex-direction: column;
  }
`;
const SolutionHeroLeft = styled.div`
  max-width: 568px;
  width: 100%;
  margin-right: 32px;
  @media only screen and (max-width: 828px) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 30px;
  }
`;
const SolutionHeroRight = styled.div`
  width: 100%;
  max-width: 446px;
  position: relative;
  max-height: 440px;
  min-height: 440px;
  @media only screen and (max-width: 828px) {
    max-width: 100%;
    max-height: 100%;
    min-height: auto;
  }
`;
const SolutionHeroImage = styled.div`
  position: absolute;
  display: block;
  height: 100%;
  width: 725px;
  margin-left: -50px;
  border-radius: 7px;
  @media only screen and (max-width: 828px) {
    margin-left: 0;
    width: 100%;
    position: static;
  }
`;
const SolutionHeading = styled.h1`
  ${Heading1}
  color: ${({ theme }) => theme.colors.textColor};
  margin: 0 0 16px 0;
  @media only screen and (max-width: 479px) {
    margin: 0 0 12px 0;
  }
`;
const SolutionHeroPara = styled.p`
  margin: 0;
  ${HeroPara}
  color: ${({ theme }) => theme.colors.textColor};
`;
const HeroBtnBlock = styled.div`
  margin-top: 42px;
  button {
    :last-child {
      margin-left: 16px;
    }
  }
  @media only screen and (max-width: 991px) {
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
const AnnounceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 42px 0 0 0;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 991px) {
    margin: 30px 0 0 0;
  }
  @media only screen and (max-width: 479px) {
    flex-wrap: wrap;
  }
`;
const AnnounceListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0 24px 0 0;
  :last-child {
    margin: 0;
  }
  span {
    ${Text3}
    margin: 0 0 0 8px;
    color: ${({ theme }) => theme.colors.romanSilver};
  }
  @media only screen and (max-width: 991px) {
    margin: 0 12px 0 0;
  }
  @media only screen and (max-width: 479px) {
    width: 50%;
    margin: 10px 0 0 0;
    :last-child {
      margin: 10px 0 0 0;
    }
  }
`;
const SolutionLogos = styled.div`
  margin: 50px 0 0 0;
`;
const LogoHeadText = styled.p`
  margin: 0;
  ${Text3}
  text-align: center;
  color: ${({ theme }) => theme.colors.romanSilver};
`;
const SolutionLogoList = styled.ul`
  width: 100%;
  max-width: 960px;
  margin: 24px auto 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 479px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 30px;
  }
`;
const SolutionListItem = styled.li`
  margin: 0;
  text-align: left;
`;

export {
  SolutionHeroWrap,
  SolutionHeroLeft,
  SolutionHeroRight,
  SolutionHeading,
  SolutionHeroPara,
  HeroBtnBlock,
  AnnounceList,
  AnnounceListItem,
  SolutionHeroImage,
  SolutionLogos,
  LogoHeadText,
  SolutionLogoList,
  SolutionListItem,
};
