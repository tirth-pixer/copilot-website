import styled from "styled-components";
import { Heading1, Heading2, HeroPara, Text1 } from "./styles";

const AffilateHeading = styled.h1`
  margin: 0 0 16px 0;
  ${Heading1}
  color: ${({ theme }) => theme.colors.textColor};
`;
const AffilatePara = styled.p`
  margin: 0 0 32px 0;
  ${HeroPara}
  color: ${({ theme }) => theme.colors.textColor};
`;
const AffilateWrapper = styled.div`
  padding: 50px 0 0 0;
  @media only screen and (max-width: 768px) {
    padding: 20px 0 0 0;
  }
`;
const AffilateInner = styled.div`
  max-width: 960px;
  width: 100%;
  margin: auto;
`;
const AffilateTitleBlock = styled.div`
  margin: 0 0 50px 0;
  :last-child {
    margin: 0;
  }
  @media only screen and (max-width: 479px) {
    margin: 0 0 30px 0;
  }
`;
const AffilateSubHeading = styled.h2`
  margin: 0 0 20px 0;
  ${Heading2}
  color: ${({ theme }) => theme.colors.textColor};
`;
const AffilateSubPara = styled.p`
  margin: 0 0 20px 0;
  ${Text1}
  color: ${({ theme }) => theme.colors.romanSilver};
`;
const AffilateList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const AffilateListItem = styled.li`
  margin-bottom: 12px;
  padding-left: 16px;
  background-image: url("/images/icon-check-circle.svg");
  background-position: 0% 9px;
  background-size: auto;
  background-repeat: no-repeat;
  ${Text1}
  color: ${({ theme }) => theme.colors.romanSilver};
  :last-child {
    margin: 0;
  }
  b {
    font-weight: 700;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const AffilateOlList = styled.ol`
  list-style: decimal;
  padding: 0 0 0 16px;
  margin: 0;
`;
const AffilateOlListItem = styled.li`
  margin: 0 0 12px 0;
  ${Text1}
  color: ${({ theme }) => theme.colors.romanSilver};
  :last-child {
    margin: 0;
  }
  a {
    span {
      margin: 0 6px 0 0;
    }
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export {
  AffilateHeading,
  AffilatePara,
  AffilateWrapper,
  AffilateInner,
  AffilateTitleBlock,
  AffilateSubHeading,
  AffilateList,
  AffilateListItem,
  AffilateSubPara,
  AffilateOlList,
  AffilateOlListItem,
};
