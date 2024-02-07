import React from "react";
import Link from "next/link";
import { DownOutlined, SmileOutlined, ReactIcon } from "@/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "@/atoms";

const documents = [
  {
    key: "reactUse",
    label: <Link href="/reactUse">React Use</Link>,
    children: [
      {
        key: "hooks",
        label: "hooks",
        children: [
          {
            key: "useMemo",
            label: <Link href="/reactUse/hooks/reactUseMemo">useMemo</Link>,
            icon: <ReactIcon />,
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

            icon: <ReactIcon />,
          },
        ],
      },
    ],
  },
  {
    key: "ReactLibraries",
    label: "React Libraries",
    children: [
      {
        key: "NextAuth",
        label: <Link href="/nextAuth">NextAuth</Link>,

        icon: <SmileOutlined />,
      },
    ],
  },
];

const ReactUseMenue: React.FC<any> = ({ itemName }) => {
  const items: MenuProps["items"] = itemName == "Docs" ? documents : documents;
  return (
    <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {itemName}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default ReactUseMenue;
