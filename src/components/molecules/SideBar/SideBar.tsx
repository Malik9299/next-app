import React, { FC } from "react";
import Link from "next/link";

import type { MenuProps } from "@/types";

import { Layout, Menu } from "@/atoms";
const { Sider } = Layout;

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  NextIcon,
  ReactIcon,
  RightCircleOutlined,
  BookOutlined,
} from "@/icons";

const items = [
  {
    key: "reactUse",
    label: <Link href="/reactUse">React Use</Link>,
    icon: <RightCircleOutlined />,
    children: [
      {
        key: "hooks",
        label: "hooks",
        children: [
          {
            key: "useMemo",
            label: <Link href="/reactUse/hooks/reactUseMemo">useMemo</Link>,
          },
        ],
      },
      {
        key: "others",
        label: "others",
        children: [
          {
            key: "reactMemo",
            label: <Link href="/reactUse/others/reactMemo">React.memo</Link>,
          },
        ],
      },
    ],
  },
  {
    key: "ReactLibraries",
    label: "React Libraries",
    icon: <BookOutlined />,
    children: [
      {
        key: "NextAuth",
        label: <Link href="/nextAuth">NextAuth</Link>,

        icon: <UserOutlined />,
      },
    ],
  },
];

const SideBar: FC<any> = ({ colorBgContainer, collapsed }) => {
  return (
    <Sider
      width={200}
      style={{ background: colorBgContainer }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div
        className="demo-logo-vertical"
        style={{ marginLeft: "30px", marginTop: "18px", marginBottom: "40px" }}
      >
        <NextIcon />
      </div>
      <Menu
        theme="light"
        mode="inline"
        style={{ height: "100%", borderRight: 0 }}
        items={items}
      />
    </Sider>
  );
};

export default SideBar;
