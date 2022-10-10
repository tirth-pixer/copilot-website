import styled, { css } from "styled-components";
import { Heading3, Text2 } from "../../styles/styles";

const PricingTable = styled.div``;
const PricingTableTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -8px 16px -8px;
`;
const PricingHeading = styled.div`
  width: 33.33%;
  padding: 0 8px;
  h2 {
    margin: 0%;
    ${Heading3}
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textColor};
  }
`;
const PricingHeadCell = styled.div`
  width: 16.66%;
  padding: 0 8px;
  text-align: center;
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.textColor};
    text-transform: uppercase;
  }
`;
const PricingRowMain = styled.div`
  display: flex;
  margin: 0 -8px;
`;
const PricingToggleWrap = styled.div`
  width: 33.33%;
  padding: 0 8px;
  display: flex;
  align-items: end;
`;
const PricingHeadingCell = styled.div`
  width: 16.66%;
  padding: 0 8px;
`;
const PricingTop = styled.div`
  padding: 30px 16px 0;
  border-radius: 14px 14px 0 0;
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
const Price = styled.h3`
  margin: 0 0 10px 0;
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
const UserMonth = styled.span`
  display: block;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.manatee};
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.128px;
  text-transform: none;
  ${(props) =>
    props.isLifeTimeDealPage &&
    css`
      display: none;
    `}
`;
const GetStarted = styled.div`
  margin-top: 16px;
  text-align: center;
  a {
    padding: 5px 10px;
    border-radius: 4px;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
    transition: all 300ms;
    :hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
  ${(props) =>
    props.darkMode &&
    css`
      a {
        color: ${({ theme }) => theme.colors.whiteColor};
        :hover {
          background-color: hsla(0, 0%, 100%, 0.05);
        }
      }
    `}
`;
const PricingInfoMainRow = styled.div`
  display: flex;
  align-items: stretch;
  margin: 0 -8px;
`;
const PricingInfoRow = styled.div`
  display: flex;
  align-items: stretch;
  margin: 0 -8px;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -12px;
    right: -12px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    opacity: 0;
  }
  :hover {
    ::before {
      opacity: 1;
    }
  }
`;
const PricingInfoHeader = styled.div`
  padding: 50px 8px 0 8px;
  width: 33.33%;
  p {
    &.dnone {
      opacity: 0;
    }
    margin: 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1.28px;
    color: ${({ theme }) => theme.colors.manatee};
    text-transform: uppercase;
  }
`;
const PricingInfo = styled.div`
  padding: 0 8px;
  width: 16.66%;
`;
const PricingInfoInner = styled.div`
  padding: 50px 8px 16px 8px;
  &.lastblock {
    border-radius: 0 0 14px 14px;
  }
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1.28px;
    color: ${({ theme }) => theme.colors.manatee};
    text-transform: uppercase;
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
const PriCingInfoWrapper = styled.div``;
const PricingContentName = styled.div`
  width: 33.33%;
  padding: 0 8px;
  display: flex;
  align-items: center;
  p {
    margin: 0;
    ${Text2}
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.Onyx};
  }
`;
const PricingCell = styled.div`
  padding: 0 8px;
  width: 16.66%;
`;
const PricingInnertext = styled.div`
  height: 100%;
  padding: 9px 16px;
  text-align: center;
  .crossImage {
    opacity: 0;
  }
  p {
    &.dnone {
      opacity: 0;
    }
    margin: 0;
    text-align: center;
    ${Text2}
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.textColor};
    ${(props) =>
      props.dark &&
      css`
        color: ${({ theme }) => theme.colors.whiteColor};
      `}
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

export {
  PricingTable,
  PricingTableTitle,
  PricingHeading,
  PricingRowMain,
  PricingHeadCell,
  PricingToggleWrap,
  PricingHeadingCell,
  PricingTop,
  Price,
  UserMonth,
  GetStarted,
  PricingInfoRow,
  PricingInfoHeader,
  PricingInfo,
  PricingInfoInner,
  PriCingInfoWrapper,
  PricingContentName,
  PricingCell,
  PricingInnertext,
  ToggleBlock,
  ToggleLink,
  LpcSwicther,
  SwicthCover,
  SwicthButton,
  PricingInfoMainRow,
};
