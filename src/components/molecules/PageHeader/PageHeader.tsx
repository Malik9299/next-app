import React, { FC } from "react";
import { Layout, Button, theme, Row, Col } from "@/atoms";
import { ReactUseMenue } from "@/molecules";
const { Header } = Layout;
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@/icons";

const PageHeader: FC<any> = ({ operateColaps, collapsed }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Row>
        <Col span={8}>
          <Row>
            <Col>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={operateColaps}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col style={{ marginLeft: "20px" }}>Next App</Col>
          </Row>
        </Col>

        {/* <Col span={2} offset={12}>
          <ReactUseMenue itemName="Docs" />
        </Col>
        <Col span={2}>
          <ReactUseMenue itemName="Profile" />
        </Col> */}
      </Row>
    </Header>
  );
};

export default PageHeader;
