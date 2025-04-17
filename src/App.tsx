import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import ProductList from './ProductsList';
import DetailPrice from './DetailPrice';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            height: 64,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: 8,
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <ShoppingOutlined />,
              label: <Link to="/">Accueil</Link>,
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '0 24px',
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: '18px' }}
          />
          <h1 style={{ marginLeft: 16, fontSize: '20px' }}>Djoli</h1>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
  <Route path="/" element={<ProductList />} />
  <Route path="/add_product/:slug" element={<DetailPrice />} />
</Routes>

        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
