import styled, { css } from "styled-components";
import { Heading1, Heading2, Heading5, HeroPara, Text2 } from "./styles";

const TemplateWrapper = styled.div`
  margin: 50px 0 0 0;
  @media only screen and (max-width: 768px) {
    margin: 20px 0 0 0;
  }
`;
const TemplateInner = styled.div`
  display: flex;
  margin: 0 -16px;
  @media only screen and (max-width: 768px) {
    margin: 0;
    flex-wrap: wrap;
  }
`;
const TemplateLeft = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 16px;
  display: none;
  @media only screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0;
  }
`;
const TemplateRight = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 16px;
  @media only screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0;
    margin: 32px 0 0 0;
  }
`;
const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 768px) {
    display: none;
    padding: 8px;
    ${(props) =>
      props.isDropdownOpen &&
      css`
        display: block;
      `}
  }
`;
const CategoryListItem = styled.li`
  margin: 0 0 8px 0;
  padding: 8px 14px;
  border-radius: 6px;
  ${Heading5}
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor};
  :last-child {
    margin: 0;
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;
const TemplateList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 32px;
  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
  }
  @media only screen and (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`;
const TemplateListItem = styled.li`
  margin: 0;
  a {
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    display: inline-block;
    border-radius: 12px;
    height: 100%;
    width: 100%;
    transition: all 300ms;
    :hover {
      box-shadow: var(--shadowCard);
      @media only screen and (max-width: 768px) {
        box-shadow: none;
      }
    }
  }
`;
const TemplateCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const TemplateImage = styled.div``;
const TemplateContent = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  h2 {
    margin: 0 0 24px 0;
    ${Heading5}
    color: ${({ theme }) => theme.colors.textColor};
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
const Categroydropdown = styled.div`
  @media only screen and (max-width: 768px) {
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 6px;
  }
`;
const DropDownTop = styled.div`
  padding: 14px;
  display: none;
  align-items: center;
  justify-content: space-between;
  span {
    ${Heading5}
    color: ${({ theme }) => theme.colors.textColor};
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    ${(props) =>
      props.isDropdownOpen &&
      css`
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
      `}
  }
`;
const DropIcon = styled.div`
  transform: rotate(0);
  ${(props) =>
    props.isDropdownOpen &&
    css`
      transform: rotate(-180deg);
    `}
`;
const DetailTemplateInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;
const DetailLeft = styled.div`
  max-width: 568px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 30px 0 0;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin: 30px 0 0 0;
  }
`;
const DetailRight = styled.div`
  max-width: 446px;
  width: 100%;
  .theme-img {
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor} !important;
    box-shadow: 0px 0px 7px rgba(37, 37, 38, 0.12);
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
const CategoryPanel = styled.div`
  display: flex;
  align-items: center;
`;
const Category = styled.div`
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  a {
    color: ${({ theme }) => theme.colors.textColor};
  }
  span {
    color: ${({ theme }) => theme.colors.romanSilver};
  }
`;
const Slash = styled.div`
  margin: 0 10px;
`;
const DetailsHeading = styled.h1`
  margin: 16px 0;
  color: ${({ theme }) => theme.colors.textColor};
  ${Heading1}
`;
const DetailPara = styled.p`
  margin: 0 0 42px 0;
  ${HeroPara}
  color: ${({ theme }) => theme.colors.blackOlive};
  @media only screen and (max-width: 768px) {
    margin: 0 0 24px 0;
  }
`;
const LinkBlock = styled.div`
  display: none;
  margin: 42px 0 0 0;
  @media only screen and (max-width: 768px) {
    margin: 24px 0 0 0;
  }
`;
const HighLightcontainer = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 0 16px;
  margin: auto;
`;
const HighLighHeding = styled.h2`
  margin: 0 0 50px 0;
  ${Heading2}
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  @media only screen and (max-width: 479px) {
    margin: 0 0 30px 0;
  }
`;
const HighLightBlock = styled.div`
  max-width: 690px;
  width: 100%;
  margin: auto;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      width: 100%;
      margin-bottom: 12px;
      padding-left: 24px;
      background-image: url("/images/blue_checked.svg");
      background-position: 0% 5px;
      background-size: auto;
      background-repeat: no-repeat;
      ${Text2}
      color: ${({ theme }) => theme.colors.textColor};
    }
  }
`;
const DetailsMainBlock = styled.div`
  padding: 50px 0 0 0;
  @media only screen and (max-width: 479px) {
    padding: 20px 0 0 0;
  }
`;
const FaqContainer = styled.div`
  max-width: 710px;
  width: 100%;
  margin: auto;
  display: none;
`;
const RelatedtemplateList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 32px;
  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export {
  TemplateWrapper,
  TemplateInner,
  TemplateLeft,
  TemplateRight,
  CategoryList,
  CategoryListItem,
  TemplateList,
  TemplateListItem,
  TemplateCard,
  TemplateImage,
  TemplateContent,
  LearnMoreLink,
  Categroydropdown,
  DropDownTop,
  DropIcon,
  DetailTemplateInner,
  DetailLeft,
  DetailRight,
  Category,
  CategoryPanel,
  Slash,
  DetailsHeading,
  DetailPara,
  LinkBlock,
  HighLightcontainer,
  HighLightBlock,
  HighLighHeding,
  DetailsMainBlock,
  FaqContainer,
  RelatedtemplateList,
};
