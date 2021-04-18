import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from './store';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, PieChartOutlined, DesktopOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons';

import Route from './routers';
import './index.less';

const prefixcls = 'qiweilong';
const { SubMenu } = Menu;
const { Header, Content, Sider} = Layout;

function App() {

  const [sideCollapse, setSideCollapse] = useState(false);

  const handleCollapse = () => {
    setSideCollapse(!sideCollapse);
  }

  return (
    <Provider store={createStore()}>
      <Layout>
        <Header className={`${prefixcls}-header`}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout className={`${prefixcls}-container`}>
          <Sider className={`${prefixcls}-leftContainer`} collapsible collapsed={sideCollapse} onCollapse={handleCollapse}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />}>
                Files
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className={`${prefixcls}-rightContainer`}>
            <Route />
          </Content>
        </Layout>
        
      </Layout>
    </Provider>
  )
}

ReactDom.render(<App />, document.querySelector('#root'));