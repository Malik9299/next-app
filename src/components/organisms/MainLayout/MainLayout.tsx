import React, { FC, ReactNode, useState } from "react";
import { PageHeader } from "@/molecules";
import { SideBar } from "@/molecules";
import { Layout, theme } from "@/atoms";

const { Content } = Layout;

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const operateColaps = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <SideBar colorBgContainer={colorBgContainer} collapsed={collapsed} />
      <Layout>
        <PageHeader operateColaps={operateColaps} collapsed={collapsed} />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 900,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
