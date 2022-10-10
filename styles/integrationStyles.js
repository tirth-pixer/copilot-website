import styled from "styled-components";
import { PrimaryButton, SecondryButton } from "./commonStyles";
import { Heading3, Heading5, Text2 } from "./styles";

const IntegrationBlock = styled.div`
  padding: 50px 0 120px 0;
  @media only screen and (max-width: 768px) {
    padding: 30px 0 80px 0;
  }
  @media only screen and (max-width: 479px) {
    padding: 20px 0 60px 0;
  }
`;
const IntegrationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
  }
  @media only screen and (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`;
const IntegrationItem = styled.li`
  margin: 0;
  a {
    width: 100%;
    height: 100%;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    background-color: ${({ theme }) => theme.colors.whiteColor};
    text-decoration: none;
    transition: all 300ms ease-in-out;
    :hover {
      box-shadow: 2px 2px 10px 0 rgb(0 0 0 / 10%);
    }
    @media only screen and (max-width: 768px) {
      :hover {
        box-shadow: none;
      }
    }
    @media only screen and (max-width: 479px) {
      padding: 24px;
    }
  }
`;
const IntegrationLogo = styled.div`
  width: 60px;
  height: 60px;
  @media only screen and (max-width: 479px) {
    width: 50px;
    height: 50px;
  }
`;
const IntegrationTop = styled.div`
  h2 {
    margin: 24px 0 16px 0;
    ${Heading5}
    color: ${({ theme }) => theme.colors.lightDark};
  }
  p {
    margin: 0 0 24px 0;
    ${Text2}
    color: ${({ theme }) => theme.colors.romanSilver};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  @media only screen and (max-width: 479px) {
    h2 {
      margin: 16px 0 12px 0;
    }
  }
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
const IntegrationDetailsMain = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const IntegartionDetailLeft = styled.div`
  max-width: 24%;
  width: 100%;
  @media only screen and (max-width: 991px) {
    max-width: 30%;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
const IntegrationdetailCard = styled.div`
  position: sticky;
  top: 142px;
`;
const LeftTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  @media only screen and (max-width: 479px) {
    margin-bottom: 28px;
  }
`;
const LeftBottom = styled.div`
  ${PrimaryButton} {
    width: 100%;
    a {
      width: 100%;
    }
  }
  ${SecondryButton} {
    width: 100%;
    a {
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    ${PrimaryButton} {
      width: 40%;

      a {
        width: 100%;
      }
    }
    ${SecondryButton} {
      width: 40%;
      a {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 479px) {
    ${PrimaryButton} {
      width: 100%;
      a {
        width: 100%;
      }
    }
    ${SecondryButton} {
      width: 100%;
      a {
        width: 100%;
      }
    }
  }
`;
const LinkBlock = styled.div`
  margin: 24px 0;
  a {
    display: flex;
    :first-child {
      margin-bottom: 16px;
    }
  }
  @media only screen and (max-width: 479px) {
    margin: 18px 0;
  }
`;
const IntegrationDetaisRight = styled.div`
  max-width: 68%;
  width: 100%;
  @media only screen and (max-width: 991px) {
    max-width: 60%;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-top: 50px;
  }
`;
const ThumnailImage = styled.div`
  width: 100%;
  max-width: 470px;
  margin: auto;
`;
const BreadCrumPannel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 42px;
  @media only screen and (max-width: 479px) {
    margin-bottom: 28px;
  }
`;
const BreadCrum = styled.div`
  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
    color: ${({ theme }) => theme.colors.textColor};
  }
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
    color: ${({ theme }) => theme.colors.romanSilver};
  }
`;
const BreadCrumSlash = styled.div`
  margin: 0 10px;
`;
const IntegrationTitleBlock = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin: 0 0 0 30px;
    ${Heading3}
    color: ${({ theme }) => theme.colors.textColor};
  }
  @media only screen and (max-width: 479px) {
    h2 {
      margin: 0 0 0 16px;
    }
  }
`;
const DetailsLogo = styled.div`
  min-width: 68px;
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: var(--shadowCard);
  @media only screen and (max-width: 479px) {
    min-width: 52px;
    min-height: 52px;
    span {
      max-width: 40px !important;
    }
  }
`;
const RightTop = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  @media only screen and (max-width: 768px) {
    background-color: ${({ theme }) => theme.colors.antiFlashWhite};
  }
`;
const RightBottom = styled.div`
  width: 100%;
  max-width: 86%;
  margin: 80px auto 0 auto;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin: 30px auto 0 auto;
  }
`;

export {
  IntegrationBlock,
  IntegrationList,
  IntegrationItem,
  IntegrationLogo,
  IntegrationTop,
  LearnMoreLink,
  IntegrationDetailsMain,
  IntegartionDetailLeft,
  IntegrationDetaisRight,
  BreadCrumPannel,
  BreadCrum,
  BreadCrumSlash,
  IntegrationTitleBlock,
  DetailsLogo,
  LeftTop,
  LeftBottom,
  IntegrationdetailCard,
  LinkBlock,
  RightTop,
  ThumnailImage,
  RightBottom,
};
