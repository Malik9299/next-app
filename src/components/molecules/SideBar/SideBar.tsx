import React, { FC } from "react";
import type { MenuProps } from "@/types";

import { Layout, Menu } from "@/atoms";
const { Sider } = Layout;

import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@/icons";

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const SideBar: FC<any> = ({ colorBgContainer, collapsed }) => {
  return (
    <Sider
      width={200}
      style={{ background: colorBgContainer }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <Menu
        theme="light"
        mode="inline"
        style={{ height: "100%", borderRight: 0 }}
        items={items2}
      />
    </Sider>
  );
};

export default SideBar;
