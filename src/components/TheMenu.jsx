import React, { useState } from "react";
import { Menu, Icon, Layout } from "antd";
import { ReactComponent as IconLogo } from "../assets/svg/Cloudbeat.svg";
import { ReactComponent as IconBeat } from "../assets/svg/Beat.svg";

const { SubMenu } = Menu;
const { Sider } = Layout;

const TheMenu = () => {
  const [state, setState] = useState({ collapsed: false });

  const onCollapse = collapsed => {
    setState(ps => ({ collapsed }));
  };

  return (
    <Sider
      className="the-menu"
      collapsible
      collapsed={state.collapsed}
      onCollapse={onCollapse}
    >
      <div className="the-menu__logo-wrapper">
        {!state.collapsed ? (
          <IconLogo className="the-menu__logo" />
        ) : (
          <IconBeat className="the-menu__logo the-menu__logo--collapsed" />
        )}
      </div>
      <Menu theme="dark" defaultSelectedKeys={["2"]} mode="inline">
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="experiment" />
              <span>Tests</span>
            </span>
          }
        >
          <Menu.Item key="1">Cases</Menu.Item>
          <Menu.Item key="2">Suites</Menu.Item>
          <Menu.Item key="3">Active runs</Menu.Item>
          <Menu.Item key="4">Results</Menu.Item>
          <Menu.Item key="5">Apps</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="desktop" />
              <span>Monitors</span>
            </span>
          }
        >
          <Menu.Item key="6">Option 1</Menu.Item>
          <Menu.Item key="7">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="profile" />
              <span>Projects</span>
            </span>
          }
        >
          <Menu.Item key="8">Option 1</Menu.Item>
          <Menu.Item key="9">Option 2</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default TheMenu;
