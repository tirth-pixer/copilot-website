import styled from "styled-components";
import { Heading3, Text2 } from "../../styles/styles";

const IntegrationMain = styled.div`
  background-color: ${({ theme }) => theme.colors.ghostWhite};
  padding: 80px 0;
  @media only screen and (max-width: 768px) {
    padding: 60px 0;
  }
`;
const IntegrationInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  @media only screen and (max-width: 991px) {
    grid-gap: 24px;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;
const IntegrationLeft = styled.div`
  padding: 0 32px;
  h3 {
    ${Heading3}
    margin: 0;
    color: ${({ theme }) => theme.colors.textColor};
  }
  p {
    margin: 16px 0;
    ${Text2}
    color: ${({ theme }) => theme.colors.romanSilver};
  }
  @media only screen and (max-width: 991px) {
    padding: 0 16px;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;
const IntegrationRight = styled.div``;
const IntegrationLogoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 12px;
  }
  @media only screen and (max-width: 479px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const IntegrationLogoItem = styled.li`
  width: 100%;
  margin-bottom: 0px;
  padding: 22px 0;
  display: flex;
  justify-content: center;
  align-items: center;
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

export {
  IntegrationMain,
  IntegrationInner,
  IntegrationLeft,
  IntegrationRight,
  LearnMoreLink,
  IntegrationLogoList,
  IntegrationLogoItem,
};
