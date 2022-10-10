import styled from "styled-components";
import { Heading2, Heading4, Text1, Text2 } from "./styles";

const ContactUsWrapper = styled.div`
  padding: 50px 0 0 0;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;
const ContactBlock = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const ContactLeft = styled.div`
  max-width: 540px;
  width: 100%;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 50px;
  }
`;
const ContactRight = styled.div`
  width: 100%;
  max-width: 520px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: var(--shadowColor);
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
const ContactHeading = styled.h2`
  margin: 0 0 16px 0;
  ${Heading2}
  color: ${({ theme }) => theme.colors.textColor};
`;
const ContactPara = styled.p`
  margin: 0;
  ${Text2}
  color: ${({ theme }) => theme.colors.romanSilver};
`;
const ContactLinkBlock = styled.div`
  margin: 24px 0 0 0;
  @media only screen and (max-width: 768px) {
    margin: 16px 0 0 0;
  }
`;
const ContactDetails = styled.div`
  padding: 12px 16px;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;
const LinkHeading = styled.h3`
  margin: 0 0 8px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
`;
const Linkdiv = styled.div`
  margin-top: 4px;
  a {
    ${Text2}
    color: ${({ theme }) => theme.colors.romanSilver};
    transition: all 300ms;
    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
const SocialLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 32px 0 0 0;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    margin: 24px 0 0;
  }
`;
const SocialLinkListItem = styled.li`
  margin: 0 12px 0 0;
  a {
    display: flex;
    transform: scale(1);
    transition: all 300ms;
    :hover {
      transform: scale(1.2);
      @media only screen and (max-width: 768px) {
        transform: scale(1);
      }
    }
  }
`;
const Form = styled.form`
  padding: 32px;
  @media only screen and (max-width: 479px) {
    padding: 24px;
  }
`;
const InputBlock = styled.div`
  margin-bottom: 24px;
`;
const Lable = styled.span`
  display: block;
  margin: 0 0 8px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  color: ${({ theme }) => theme.colors.romanSilver};
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  ${Text2}
  color: ${({ theme }) => theme.colors.textColor};
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: var(--inputBoxShadow);
  }
  ::placeholder {
    ${Text2}
    color: ${({ theme }) => theme.colors.romanSilver};
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  ${Text2}
  color: ${({ theme }) => theme.colors.textColor};
  resize: none;
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: var(--inputBoxShadow);
  }
  ::placeholder {
    ${Text2}
    color: ${({ theme }) => theme.colors.romanSilver};
  }
  &.height96 {
    height: 96px;
  }
`;
const SuccessWrap = styled.div`
  max-width: 486px;
  width: 100%;
  margin: auto;
  height: 445px;
  padding: 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    ${Heading4}
    margin: 38px 0 16px 0;
    text-align: center;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkColor};
  }
  p {
    ${Text1}
    margin: 0;
    text-align: center;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkColor};
  }
  @media only screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export {
  ContactUsWrapper,
  ContactBlock,
  ContactLeft,
  ContactRight,
  ContactHeading,
  ContactPara,
  ContactLinkBlock,
  ContactDetails,
  LinkHeading,
  Linkdiv,
  SocialLinkList,
  SocialLinkListItem,
  Form,
  InputBlock,
  Lable,
  Input,
  TextArea,
  SuccessWrap,
};
