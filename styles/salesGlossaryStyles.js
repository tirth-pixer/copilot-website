import styled from "styled-components";
import { Heading2, HeroPara, Text1, Text2 } from "./styles";

const SearchHeader = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90.07deg,
    #fdfaf5 4.04%,
    #f9f8f1 47.24%,
    #fef5eb 97.72%
  );
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 12px 12px;
  @media only screen and (max-width: 768px) {
    padding: 10px 24px;
  }
`;
const SecrhList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    overflow: auto;
  }
`;
const SearhListItem = styled.li`
  margin: 0 20px 0 0;
  a {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.romanSilver};
    text-transform: uppercase;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .active {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media only screen and (max-width: 768px) {
    margin: 0 14px 0 0;
    a {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
const GlossaryBlock = styled.div`
  padding: 14px 0 120px 0;
  @media only screen and (max-width: 768px) {
    padding: 14px 0 80px 0;
  }
  @media only screen and (max-width: 479px) {
    padding: 14px 0 60px 0;
  }
`;
const GlossaryContainer = styled.div`
  padding: 36px 0;
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  @media only screen and (max-width: 479px) {
    flex-direction: column;
  }
`;
const GlossaryWord = styled.div`
  padding: 10px 0 0 10px;
  max-width: 100px;
  width: 100%;
  h2 {
    margin: 0;
    font-weight: 500;
    font-size: 94px;
    line-height: 108px;
    color: #333333;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 479px) {
    max-width: 100%;
    padding: 0 20px;
    h2 {
      font-size: 40px;
      line-height: 48px;
    }
  }
`;
const GlossaryCardBlock = styled.div`
  width: 100%;
  margin-left: 36px;
  @media only screen and (max-width: 768px) {
    margin-left: 20px;
  }
  @media only screen and (max-width: 479px) {
    margin-left: 0;
  }
`;
const GloassaryCardList = styled.div``;
const GloassaryCardInnerList = styled.ul`
  list-style: none;
  padding: 16px;
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 479px) {
    padding: 12px;
  }
`;
const GloassaryCardInnerItem = styled.li`
  flex: 0 0 33.33%;
  width: 33.33%;
  padding: 8px;
  margin: 0;
  a {
    text-align: left;
    ${Text2}
    color: ${({ theme }) => theme.colors.romanSilver};
    transition: all 300ms;
    :hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  @media only screen and (max-width: 768px) {
    flex: 0 0 50%;
    width: 50%;
    a {
      :hover {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.romanSilver};
      }
    }
  }
  @media only screen and (max-width: 479px) {
    flex: 0 0 100%;
    width: 100%;
  }
`;

const GlossaryDetailsHero = styled.div`
  padding: 130px 0 120px 0;
  @media only screen and (max-width: 768px) {
    padding: 110px 0 64px 0;
  }
`;
const GlossaryDetailContainer = styled.div`
  max-width: 780px;
  width: 100%;
  margin: auto;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;
const BackOption = styled.div`
  width: 100%;
  padding: 20px 24px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  a {
    ${Text2}
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.romanSilver};
    span {
      margin-left: 4px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 16px 20px;
  }
`;
const SalesGlossaryDetailBlock = styled.div`
  padding: 40px;
  @media only screen and (max-width: 768px) {
    padding: 24px;
  }
`;

const DetailTitleBlock = styled.div`
  h1 {
    margin: 0 0 24px 0;
    ${Heading2}
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textColor};
    span {
      ${HeroPara}
      text-transform: uppercase;
      display: block;
      color: ${({ theme }) => theme.colors.romanSilver};
    }
  }
  @media only screen and (max-width: 768px) {
    h1 {
      margin: 0 0 16px 0;
    }
  }
`;
const DetailPara = styled.p`
  margin: 0;
  ${Text1}
  color: ${({ theme }) => theme.colors.blackOlive};
`;

export {
  SearchHeader,
  SecrhList,
  SearhListItem,
  GlossaryBlock,
  GlossaryContainer,
  GlossaryWord,
  GlossaryCardBlock,
  GloassaryCardList,
  GloassaryCardInnerList,
  GloassaryCardInnerItem,
  GlossaryDetailsHero,
  GlossaryDetailContainer,
  BackOption,
  DetailTitleBlock,
  DetailPara,
  SalesGlossaryDetailBlock,
};
