import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import "./index.less";

const { Header, Content, Sider } = Layout;

const HomeLayout: React.FC = () => {
  const [collapsed, changeCollapsed] = useState(false);

  const handleCollapse = () => {
    changeCollapsed(!collapsed);
  };
  return (
    <Layout className="home-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="home-layout-logo">知更鸟</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="home-layout-header">
          {collapsed ? (
            <MenuUnfoldOutlined onClick={handleCollapse} />
          ) : (
            <MenuFoldOutlined onClick={handleCollapse} />
          )}
        </Header>
        <Content className="home-layout-content">1</Content>
      </Layout>
    </Layout>
  );
};

export default HomeLayout;
