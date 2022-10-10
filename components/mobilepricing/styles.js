import styled, { css } from "styled-components";
import { Heading2, Text2, Text3 } from "../../styles/styles";

const MobilePricingMain = styled.div``;
const MobilePricingHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;
const MobilePricingCard = styled.div`
  padding: 25px 20px;
  margin: 0 0 24px 0;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  :last-child {
    margin: 0;
  }
  ${(props) =>
    props.white
      ? css`
          background-color: ${({ theme }) => theme.colors.whiteColor};
        `
      : props.water
      ? css`
          background-color: ${({ theme }) => theme.colors.water};
        `
      : props.green
      ? css`
          background-color: ${({ theme }) => theme.colors.teaGreen};
        `
      : props.dark
      ? css`
          background-color: ${({ theme }) => theme.colors.lightDark};
        `
      : ""}
`;
const MobilePricingCardWrap = styled.div``;
const MobilePricingHeading = styled.h2`
  margin: 0;
  ${Heading2}
  font-weight: 500;
  margin-bottom: 20px;
`;
const ToggleBlock = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.isLifeTimeDealPage &&
    css`
      display: none;
    `}
`;
const ToggleLink = styled.div`
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.lightDark};
    &.activePlan {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
const LpcSwicther = styled.div`
  height: 20px;
  padding: 0 8px;
`;
const SwicthCover = styled.div`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.blackOlive};
  cursor: pointer;
`;
const SwicthButton = styled.div`
  position: absolute;
  left: 3px;
  top: -4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  transform: translateY(50%);
  transition: left 0.2s ease;
  &.toggle-button {
    transform: translate(11px, 7px);
  }
`;
const PricingType = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.textColor};
  text-transform: uppercase;
  ${(props) =>
    props.darkMode &&
    css`
      color: ${({ theme }) => theme.colors.whiteColor};
    `}
`;
const PricingBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
const Price = styled.h3`
  margin: 0 12px 0 0;
  font-size: 44px;
  line-height: 50px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.44px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  ${(props) =>
    props.darkMode &&
    css`
      color: ${({ theme }) => theme.colors.whiteColor};
    `}
`;
const PricingDetail = styled.div``;
const UserMonth = styled.span`
  display: block;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.manatee};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.128px;
  text-transform: none;
  :last-child {
    margin-bottom: 0;
  }
  ${(props) =>
    props.isLifeTimeDealPage &&
    css`
      display: none;
    `}
`;
const GetStarted = styled.div`
  margin-bottom: 16px;
  text-align: center;
  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
  }
  ${(props) =>
    props.darkMode &&
    css`
      a {
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    `}
`;
const PricingMainFeature = styled.p`
  margin: 0 0 5px 0;
  ${Text2}
  color: ${({ theme }) => theme.colors.Onyx};
  ${(props) =>
    props.darkMode &&
    css`
      color: ${({ theme }) => theme.colors.whiteColor};
    `}
`;
const PricingTanMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0;
  margin-top: 8px;
  span {
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.romanSilver};
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }
`;
const FeatureListWrap = styled.div`
  padding: 8px 0;
`;
const HeaderListItem = styled.li`
  margin: 0 0 16px 0;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 1.1px;
  color: ${({ theme }) => theme.colors.romanSilver};
  text-transform: uppercase;
`;
const FeatureListItem = styled.li`
  padding-left: 20px;
  background-image: url("/images/access-icon.svg");
  background-position: 0 5px;
  background-size: 10px;
  background-repeat: no-repeat;
  ${Text3}
  font-weight: 400;
  color: ${({ theme }) => theme.colors.Onyx};
  letter-spacing: 0.128px;
`;
const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 24px 0 0 0;
  :first-child {
    margin: 0;
  }
  ${FeatureListItem} {
    ${(props) =>
      props.darkMode &&
      css`
        background-image: url("/images/access-white-icon.svg");
        color: ${({ theme }) => theme.colors.whiteColor};
      `}
  }
`;

export {
  MobilePricingMain,
  MobilePricingCard,
  MobilePricingHeader,
  ToggleBlock,
  ToggleLink,
  LpcSwicther,
  SwicthCover,
  SwicthButton,
  MobilePricingHeading,
  MobilePricingCardWrap,
  PricingType,
  PricingBlock,
  Price,
  PricingDetail,
  UserMonth,
  GetStarted,
  PricingMainFeature,
  PricingTanMenu,
  FeatureListWrap,
  FeatureList,
  FeatureListItem,
  HeaderListItem,
};
