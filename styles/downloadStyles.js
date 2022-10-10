import styled from "styled-components";
import { PrimaryButton } from "./commonStyles";
import { Heading2, Text1 } from "./styles";

const DownLoadBlock = styled.div`
  h2 {
    margin: 0;
    ${Heading2}
    text-align: center;
    color: ${({ theme }) => theme.colors.textColor};
  }
  :nth-child(even) {
    padding: 120px 0;
    @media only screen and (max-width: 768px) {
      padding: 80px 0;
    }
    @media only screen and (max-width: 479px) {
      padding: 60px 0;
    }
  }
`;
const DownloadPara = styled.p`
  max-width: 700px;
  width: 100%;
  margin: auto;
  ${Text1}
  color: ${({ theme }) => theme.colors.romanSilver};
  text-align: center;
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const DownloadImage = styled.div`
  transform: scale(1);
  transition: all 300ms;
  > span {
    display: block !important;
  }
`;
const DownloadBtnBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0 0 0;
  a {
    margin-right: 30px;
    :last-child {
      margin-right: 0;
    }
    :hover {
      ${DownloadImage} {
        transform: scale(1.1);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    a {
      margin-right: 24px;
      :hover {
        ${DownloadImage} {
          transform: scale(1);
        }
      }
    }
  }
  @media only screen and (max-width: 479px) {
    margin: 20px 0 0 0;
    a {
      margin-right: 12px;
    }
    ${PrimaryButton} {
      width: 100%;
      a {
        width: 100%;
      }
    }
  }
`;

export { DownLoadBlock, DownloadPara, DownloadBtnBlock, DownloadImage };
