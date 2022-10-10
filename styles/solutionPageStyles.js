import styled from "styled-components";
import { ScFeatureBlock } from "./featureStyles";
import { Heading2, Heading3, Heading6, Text2, Text3 } from "./styles";

const SolutionSubHeading = styled.h2`
  max-width: 960px;
  width: 100%;
  margin: 0 auto 50px auto;
  text-align: center;
  ${Heading2}
  color: ${({ theme }) => theme.colors.lightDark};
  &.MB16 {
    margin: 0 auto 16px auto;
  }
  @media only screen and (max-width: 479px) {
    margin: 0 auto 32px auto;
  }
`;
const StartupWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;
const ProblemBlock = styled.div`
  padding: 0 32px;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;
const SolutionBlock = styled.div`
  padding: 0 32px;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;
const CrmSubHeading = styled.h3`
  margin: 0 0 16px 0;
  ${Heading3}
  color: ${({ theme }) => theme.colors.lightDark};
`;
const CrmPara = styled.p`
  margin: 0;
  ${Text2}
  color: ${({ theme }) => theme.colors.romanSilver};
  &.MB10 {
    margin: 0 0 10px 0;
  }
  &.MB16 {
    margin: 0 0 16px 0;
  }
`;
const SolutionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const SolutionListItem = styled.li`
  ${Text3}
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 12px;
  padding-left: 25px;
  background-image: url("/images/blue_checked.svg");
  background-position: 0 4px;
  background-size: auto;
  background-repeat: no-repeat;
  :last-child {
    margin-bottom: 0;
  }
`;
const SolutionMainBlock = styled.div``;
const TopTabMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  &.real-state {
    @media only screen and (max-width: 991px) {
      overflow: auto;
      align-items: unset;
      justify-content: unset;
    }
  }
  @media only screen and (max-width: 479px) {
    margin-bottom: 24px;
    overflow: auto;
    align-items: unset;
    justify-content: unset;
  }
`;
const TabMenu = styled.div`
  padding: 8px 20px;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  margin: 0 22px 0 0;
  :last-child {
    margin: 0;
  }
  cursor: pointer;
  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-left: 10px;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.lightDark};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.whiteColor};
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    box-shadow: var(--shadowCard);
  }
  @media only screen and (max-width: 479px) {
    margin: 0 11px 0 0;
    padding: 8px 16px;
    span {
      ${Text3}
    }
  }
`;
const TabIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 479px) {
    width: 16px;
    height: 16px;
  }
`;
const TabContent = styled.div`
  position: relative;
`;
const TabTitleBlock = styled.div`
  margin: 0 0 30px 0;
  @media only screen and (max-width: 479px) {
    margin: 0 0 16px 0;
  }
`;
const TabInnerContent = styled.div`
  opacity: 0;
  position: absolute;
  z-index: -5;
  top: 0;
  &.active {
    position: relative;
    opacity: 1;
    z-index: 22;
  }
`;
const TabPara = styled.p`
  max-width: 728px;
  width: 100%;
  margin: auto;
  text-align: center;
  ${Text2}
  color: ${({ theme }) => theme.colors.romanSilver};
`;
const TabBottomContent = styled.div``;
const CrmFeatureMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
  }
  @media only screen and (max-width: 479px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`;
const CrmFeatureCard = styled.div`
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    padding: 0 16px;
  }
  @media only screen and (max-width: 479px) {
    padding: 0;
  }
`;
const CrmFeatureIcon = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CrmfeatureSubHeading = styled.h3`
  margin: 20px 0 10px 0;
  ${Heading6}
  color: ${({ theme }) => theme.colors.lightDark};
  @media only screen and (max-width: 479px) {
    margin: 10px 0;
  }
`;
const SolutionWrap = styled.div`
  :nth-child(even) {
    ${ScFeatureBlock}
  }
  &.agency-crm {
    ${ScFeatureBlock} {
      :first-child {
        padding: 0 0 80px 0;
        @media only screen and (max-width: 768px) {
          padding: 0 0 50px 0;
        }
        @media only screen and (max-width: 479px) {
          padding: 0 0 30px 0;
        }
      }
      :last-child {
        padding: 80px 0 0 0;
        @media only screen and (max-width: 768px) {
          padding: 50px 0 0 0;
        }
        @media only screen and (max-width: 479px) {
          padding: 30px 0 0 0;
        }
      }
    }
  }
  &.real-state {
    ${ScFeatureBlock} {
      :first-child {
        padding: 0 0 80px 0;
        @media only screen and (max-width: 768px) {
          padding: 0 0 50px 0;
        }
        @media only screen and (max-width: 479px) {
          padding: 0 0 30px 0;
        }
      }
      :last-child {
        padding: 80px 0 0 0;
        @media only screen and (max-width: 768px) {
          padding: 50px 0 0 0;
        }
        @media only screen and (max-width: 479px) {
          padding: 30px 0 0 0;
        }
      }
    }
  }
`;
const ScAutherBlock = styled.div`
  padding-top: 15px;
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  p {
    margin: 0 0 0 12px;
    color: ${({ theme }) => theme.colors.lightDark};
    font-size: 12px;
    line-height: 16px;
  }
`;
const AutherImage = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
`;
const FaqContainer = styled.div`
  max-width: 710px;
  width: 100%;
  margin: auto;
`;

export {
  StartupWrapper,
  SolutionSubHeading,
  ProblemBlock,
  SolutionBlock,
  CrmSubHeading,
  CrmPara,
  SolutionList,
  SolutionListItem,
  SolutionMainBlock,
  TopTabMenu,
  TabMenu,
  TabContent,
  TabPara,
  TabTitleBlock,
  TabBottomContent,
  TabIcon,
  TabInnerContent,
  CrmFeatureMain,
  CrmFeatureCard,
  CrmFeatureIcon,
  CrmfeatureSubHeading,
  SolutionWrap,
  ScAutherBlock,
  AutherImage,
  FaqContainer,
};
