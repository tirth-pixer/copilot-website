import styled from "styled-components";
import { Text3 } from "../../styles/styles";

const FeatureNavBlock = styled.div`
  max-width: 1074px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: space-around;
    align-items: flex-start;
  }
`;
const FeatureSpan = styled.span`
  display: block;
  ${Text3}
  text-align: center;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.textColor};
`;
const FeatureNavLink = styled.div`
  max-width: 150px;
  width: 100%;
  margin: 0 2px;
  a {
    width: 100%;
    max-width: 150px;
    padding: 16px 0;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    &.active {
      background-color: ${({ theme }) => theme.colors.whiteColor};
      border: 1px solid ${({ theme }) => theme.colors.borderColor};
      box-shadow: var(--shadowCard);
    }
  }
  @media only screen and (max-width: 479px) {
      margin: 4px;
  }
`;
const MoreMenu = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 150px;
  padding: 16px 0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
`;
const DropDownList = styled.div`
  width: 220px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 2px 2px 10px 0 rgb(0 0 0 / 10%);
  border-radius: 6px;
  height: auto;
`;
const FcDropdownSpan = styled.div`
  ${Text3}
  color: ${({ theme }) => theme.colors.lightDark};
  font-weight: 500;
  margin-left: 12px;
  transition: all 200ms;
`;
const DropDwonLink = styled.div`
  a {
    padding: 8px;
    display: flex;
    align-items: center;
    :hover {
      ${FcDropdownSpan} {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    &.active {
      ${FcDropdownSpan} {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    :focus {
      outline: none;
    }
  }
`;

export {
  FeatureNavBlock,
  FeatureNavLink,
  FeatureSpan,
  MoreMenu,
  DropDownList,
  DropDwonLink,
  FcDropdownSpan,
};
