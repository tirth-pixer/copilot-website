import styled from "styled-components";
import { Heading5, Text2 } from "./styles";

const SalesToolsMain = styled.div``;
const SalesToolsContainer = styled.div`
  max-width: 940px;
  width: 100%;
  margin: 84px auto 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 479px) {
    grid-template-columns: 1fr;
    margin: 50px auto 0 auto;
  }
`;
const ResourceCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  box-shadow: var(--shadowCard);
  background-color: ${({ theme }) => theme.colors.whiteColor};
  &.dnone {
    display: none;
  }
`;
const ResourceCardImage = styled.div``;
const ResourceContent = styled.div`
  padding: 20px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ResourceTitle = styled.div`
  margin: 0 0 20px 0;
  h2 {
    margin: 0 0 12px 0;
    ${Heading5}
    color: ${({ theme }) => theme.colors.textColor};
  }
  p {
    margin: 0;
    ${Text2}
    color: ${({ theme }) => theme.colors.romanSilver};
  }
`;
const ResourceLink = styled.div`
  a {
    span {
      font-size: 16px;
      line-height: 20px;
      margin-right: 6px;
      color: ${({ theme }) => theme.colors.primary};
      font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
    }
    .arrow-icon {
      transform: translateX(0);
      transition: all 300ms;
    }
    :hover {
      .arrow-icon {
        transform: translateX(3px);
      }
    }
  }
`;

export {
  SalesToolsMain,
  SalesToolsContainer,
  ResourceCard,
  ResourceCardImage,
  ResourceContent,
  ResourceLink,
  ResourceTitle,
};
