import styled from "styled-components";
import { Heading2, Heading6, Text2 } from "./styles";

const FormBlock = styled.div`
  margin: 32px 0 94px 0;
  @media only screen and (max-width: 768px) {
    margin: 32px 0 64px 0;
  }
`;
const Form = styled.form`
  max-width: 432px;
  width: 100%;
  margin: auto;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: var(--shadowColor);
  border-radius: 8px;
  @media only screen and (max-width: 768px) {
    padding: 24px;
  }
`;
const InputBlock = styled.div`
  margin: 0 0 32px 0;
  @media only screen and (max-width: 768px) {
    margin: 0 0 24px 0;
  }
`;
const Lable = styled.span`
  display: block;
  margin: 0 0 8px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.manatee};
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  span {
    margin-left: 4px;
    color: #eb5757;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  ${Text2}
  color: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: var(--inputBoxShadow);
  }
  ::placeholder {
    ${Text2}
    color: ${({ theme }) => theme.colors.mediumGray};
  }
`;
const PhoneInput = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  ${Text2}
  color: ${({ theme }) => theme.colors.textColor};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  .ReactFlagsSelect-module_flagsSelect__2pfa2 {
    z-index: 2;
    width: 100%;
    height: 100%;
    padding: 0;
    button {
      width: 60px;
      border: none;
      height: 100%;
      position: relative;
      ::before {
        content: "";
        position: absolute;
        border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
        right: -12px;
        bottom: 15px;
        top: 15px;
      }
    }
  }
  .phone-input {
    position: absolute;
    z-index: 2;
    padding: 12px 20px 12px 10px;
    left: 75px;
    right: 0;
    width: auto;
    border: none;
    box-shadow: none;
  }
`;
const SuccessForm = styled.div`
  max-width: 432px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: var(--shadowColor);
  border-radius: 8px;
  @media only screen and (max-width: 768px) {
    padding: 24px;
  }
`;
const SuccessContent = styled.div`
  margin-top: 68px;
  h2 {
    ${Heading2}
    color: ${({ theme }) => theme.colors.primary};
    margin: 0 0 32px 0;
    text-align: center;
  }
  p {
    ${Heading6}
    color: ${({ theme }) => theme.colors.textColor};
    text-align: center;
    font-weight: 400;
  }
`;

export {
  FormBlock,
  Form,
  InputBlock,
  Lable,
  Input,
  PhoneInput,
  SuccessContent,
  SuccessForm,
};
