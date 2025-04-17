import { useState } from "react";
import { Col, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logoKUMO from "../../../assets/logoKUMO.png";
import {
  HeaderContainer,
  BrandText,
  HamburgerButton,
  DesktopMenu,
  MobileMenu,
  LogoImage,
  ContentWrapper,
} from "./style";

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    { key: "teachers", label: "Teachers" },
    { key: "parents", label: "Parents" },
    { key: "kumo-game", label: "KUMO Games" },
    { key: "help", label: "Help" },
    { key: "sign-in", label: "Sign In" },
  ];

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <>
      <HeaderContainer justify="space-between" align="middle">
        <Col
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <LogoImage src={logoKUMO} alt="KUMOClass Logo" />
          <BrandText>KUMOClass</BrandText>
        </Col>
        <Col>
          <DesktopMenu mode="horizontal" items={menuItems} />
          <HamburgerButton
            type="text"
            icon={<MenuOutlined style={{ fontSize: "24px" }} />}
            onClick={toggleDrawer}
          />
          <Drawer
            title="Menu"
            placement="right"
            onClose={toggleDrawer}
            visible={drawerVisible}
            bodyStyle={{ padding: 0 }}
          >
            <MobileMenu
              mode="vertical"
              items={menuItems}
              onClick={toggleDrawer}
            />
          </Drawer>
        </Col>
      </HeaderContainer>
      <ContentWrapper />
    </>
  );
};

export default Header;
