import styled from "styled-components";
import { PrimaryButton, SecondryButton } from "../../styles/commonStyles";
import { Heading3, Text2 } from "../../styles/styles";

const NewsLatterSection = styled.div`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  @media only screen and (max-width: 768px) {
    padding: 60px 0;
  }
`;
const NewLatterInner = styled.div`
  h3 {
    margin: 0 0 22px 0;
    ${Heading3}
    text-align: center;
    color: ${({ theme }) => theme.colors.whiteColor};
  }
  p {
    text-align: center;
    margin: 0;
    ${Text2}
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;
const NewsButtonBlock = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
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
      max-width: 100%;
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
  ${PrimaryButton} {
    a {
      background-color: ${({ theme }) => theme.colors.whiteColor};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  ${SecondryButton} {
    a {
      color: ${({ theme }) => theme.colors.whiteColor};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.whiteColor};
    }
  }
`;

export { NewsLatterSection, NewLatterInner, NewsButtonBlock };
