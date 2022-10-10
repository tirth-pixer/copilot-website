const { css } = require("styled-components");

const Heading1 = css`
  font-weight: 700;
  font-size: 64px;
  line-height: 74px;
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  @media only screen and (max-width: 991px) {
    font-size: 48px;
    line-height: 56px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 38px;
    line-height: 44px;
  }
  @media only screen and (max-width: 479px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

const Heading2 = css`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  @media only screen and (max-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media only screen and (max-width: 479px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

const Heading3 = css`
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  @media only screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media only screen and (max-width: 479px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const Heading4 = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  @media only screen and (max-width: 479px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const Heading5 = css`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  @media only screen and (max-width: 479px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

const Heading6 = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fontfamily.Gtwalsheimpro};
  @media only screen and (max-width: 479px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const Text2 = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

const Text1 = css`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  @media only screen and (max-width: 479px) {
    ${Text2}
  }
`;

const HeroPara = css`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  @media only screen and (max-width: 479px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Text3 = css`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  HeroPara,
  Text1,
  Text2,
  Text3,
  Heading6,
};
