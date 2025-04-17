import styled from "styled-components";
import { Row, Menu, Button } from "antd";
import { colors } from "../../../constants/colors";

export const BrandText = styled.span`
  font-size: 24px;
  margin-left: 10px;
  color: ${colors.DarkBlue};
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 40px;
  vertical-align: middle;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.MediumBlue};
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const HeaderContainer = styled(Row)`
  padding: 10px 20px;
  background: ${colors.White};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

export const HamburgerButton = styled(Button)`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const DesktopMenu = styled(Menu)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled(Menu)`
  border: none;
  .ant-menu-item {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

export const LogoImage = styled.img`
  height: 40px;
  width: 50px;

  @media (max-width: 768px) {
    height: 32px;
    width: 40px;
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 60px;

  @media (max-width: 768px) {
    padding-top: 52px;
  }
`;