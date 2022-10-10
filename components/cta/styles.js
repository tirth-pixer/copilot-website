import styled from "styled-components";
import { Heading2, Text1 } from "../../styles/styles";

const CtaInner = styled.div`
  padding: 64px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  background-image: url("/images/cta-bg.webp");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: 768px) {
    padding: 40px;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 479px) {
    padding: 24px;
  }
`;
const CtaLeft = styled.div`
  width: 100%;
  max-width: 70%;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
const SectionHeading = styled.h2`
  margin: 0;
  ${Heading2}
  color: ${({ theme }) => theme.colors.whiteColor};
`;
const CtaPara = styled.p`
  ${Text1}
  margin: 12px 0 0 0;
  color: ${({ theme }) => theme.colors.manatee};
`;
const CtaRight = styled.div`
  width: 100%;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  button {
    :first-child {
      margin-bottom: 20px;
    }
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-top: 24px;
    flex-direction: row;
    align-items: flex-start;
    button {
      :first-child {
        margin-bottom: 0;
        margin-right: 16px;
      }
    }
  }
  @media only screen and (max-width: 479px) {
    flex-direction: column;
    button {
      width: 100%;
      a {
        width: 100%;
      }
      :first-child {
        margin-bottom: 12px;
        margin-right: 0;
      }
    }
  }
`;

export { CtaInner, CtaLeft, CtaRight, CtaPara, SectionHeading };
