import styled from "styled-components";
import { Heading3, Text1, Text2 } from "./styles";

const LinkBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0 0 0;
  a {
    margin: 0 10px;
    ${Text2}
    color: ${({ theme }) => theme.colors.primary};
  }
  @media only screen and (max-width: 479px) {
    margin: 16px 0 0 0;
    flex-direction: column;
    a {
      margin: 10px 0 0 0;
    }
  }
`;
const UpdateContainer = styled.div`
  max-width: 722px;
  width: 100%;
  margin: 0 auto 50px auto;
  padding: 0 16px;
`;
const UpdateWrapper = styled.div`
  padding: 50px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  :first-child {
    padding: 0 0 50px 0;
  }
  :last-child {
    border-bottom: none;
  }
`;
const UpdateHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const TagList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const TagItem = styled.li`
  padding: 3px 12px;
  border-radius: 26px;
  background-color: ${({ theme }) => theme.colors.lightBg};
  ${Text2}
  color: ${({ theme }) => theme.colors.romanSilver};
  margin: 0 10px 8px 0;
`;
const PublishSpan = styled.span`
  ${Text2}
  color: ${({ theme }) => theme.colors.romanSilver};
`;
const UpdateContent = styled.div``;
const UpdateHeading = styled.h2`
  margin: 12px 0;
  ${Heading3}
  color: ${({ theme }) => theme.colors.textColor};
`;
const UpdatePara = styled.p`
  margin: 0 0 20px 0;
  ${Text1}
  color: ${({ theme }) => theme.colors.textColor};
`;
const UpdateImage = styled.div`
  margin: 32px 0 0 0;
  border: 0.855px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.12);
  border-radius: 7px;
  overflow: hidden;
`;

export {
  LinkBlock,
  UpdateContainer,
  UpdateWrapper,
  UpdateHeader,
  TagList,
  TagItem,
  PublishSpan,
  UpdateContent,
  UpdateHeading,
  UpdatePara,
  UpdateImage,
};
