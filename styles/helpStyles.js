import styled from "styled-components";
import { Heading4, Text1, Text2 } from "./styles";

const HelpContainer = styled.div`
  max-width: 870px;
  width: 100%;
  margin: auto;
  padding: 0 15px;
`;
const HelpList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const HelpContent = styled.div`
  h2 {
    margin: 0 0 10px 0;
    ${Heading4}
    color: ${({ theme }) => theme.colors.textColor};
    transition: all 300ms;
  }
  p {
    margin: 0;
    ${Text2}
    color: ${({ theme }) => theme.colors.romanSilver};
  }
`;
const HelpListItem = styled.li`
  list-style: none;
  margin-bottom: 30px;
  a {
    padding: 32px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    transition: all 300ms;
    text-decoration: none;
    :hover {
      box-shadow: var(--shadowCard);
      ${HelpContent} {
        h2 {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
    a {
      padding: 24px;
      :hover {
        box-shadow: none;
        ${HelpContent} {
          h2 {
            color: ${({ theme }) => theme.colors.textColor};
          }
        }
      }
    }
  }
  @media only screen and (max-width: 479px) {
    a {
      padding: 16px;
      flex-direction: column;
      align-items: flex-start;
      ${HelpContent} {
        h2 {
          margin: 10px 0;
        }
      }
    }
  }
`;
const HelpIcon = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 479px) {
    width: 45px;
    height: 45px;
  }
`;
const HelpCategoryShow = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const HelpCategoryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  ${Text2}
  a {
    color: ${({ theme }) => theme.colors.textColor};
    transition: all 300ms;
    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  span {
    color: ${({ theme }) => theme.colors.romanSilver};
  }
  @media only screen and (max-width: 479px) {
    margin-top: 24px;
    flex-direction: column;
    align-items: flex-start;
    a {
      padding-left: 24px;
      background-image: url("/images/breadcum-home.svg");
      background-repeat: no-repeat;
      background-position: 0 3px;
      margin-bottom: 6px;
    }
    span {
      padding-left: 24px;
      background-image: url("/images/BreadCrum-Icon.svg");
      background-repeat: no-repeat;
      background-position: 0 3px;
      margin-bottom: 6px;
    }
  }
`;
const Slash = styled.div`
  margin: 0 10px;
  @media only screen and (max-width: 479px) {
    display: none;
  }
`;
const HelpArticleContainer = styled.div`
  max-width: 832px;
  width: 100%;
  margin: auto;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: var(--shadowCard);
  border-radius: 8px;
  @media only screen and (max-width: 479px) {
    padding: 20px;
  }
`;
const HelpFeedback = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.antiFlashWhite};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;
const FeedbackReactionBlock = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  #not-helpful,
  #helpful,
  #very-helpful {
    margin: 0 8px;
    font-size: 32px;
    line-height: 32px;
    cursor: pointer;
    transform: scale(1);
    filter: grayscale(100%);
    transition: all 300ms;
    :hover {
      transform: scale(1.2);
    }
    &.feedback-reaction.active {
      filter: grayscale(0%);
    }
  }
`;
const EmojiBlock = styled.div``;
const FeedbackTitle = styled.p`
  margin: 0;
  text-align: center;
  ${Text1}
  color: ${({ theme }) => theme.colors.lightDark};
`;

export {
  HelpContainer,
  HelpList,
  HelpListItem,
  HelpIcon,
  HelpContent,
  HelpCategoryShow,
  HelpCategoryItem,
  Slash,
  HelpArticleContainer,
  HelpFeedback,
  FeedbackTitle,
  FeedbackReactionBlock,
  EmojiBlock,
};
