// import logo from './logo.svg';
// import './App.less';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {SideBarItems} from '../SideBar/SideBar';


function CustomLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const { Header, Content, Footer, Sider } = Layout;

    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="logo" />
                    
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={SideBarItems} />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    />
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <Breadcrumb
                            style={{
                                margin: '16px 0',
                            }}
                        >
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                            <Outlet></Outlet>
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
}

export default CustomLayout;
