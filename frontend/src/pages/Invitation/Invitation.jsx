import {Link, useNavigate} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import type { MenuProps } from 'antd';
import {
    TeamOutlined,
    MailOutlined,
    HomeOutlined,
    QuestionCircleOutlined
  } from '@ant-design/icons';
import {Breadcrumb, Button, Space, Flex, Table, Layout, Menu, theme,Typography } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


const Invitation = () => {
    const navigate = useNavigate();
    
    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
        { key: '1',  icon:<TeamOutlined />, label: 'Группы', onClick:() => {navigate("/home")} },
        { key: '2',  icon:<MailOutlined />, label: 'Приглашения', onClick:() => {navigate("/invitation")}  },
        { key: '3',  icon:<QuestionCircleOutlined />, label: 'О приложении',  onClick:() => {navigate("/about")}},
        { key: '4',  icon:<HomeOutlined />, label: 'Выход',  onClick:() => {navigate("/entrance")}},
    ];

    const [collapsed, setCollapsed] = useState(false);

    let innerTextName;
    let innerTextEmail;

    useEffect(() => {
        
        if (collapsed) {
            innerTextName = "";
            innerTextEmail = "";
        } else {
            innerTextEmail = "user@email.com";
            innerTextName = "User Name";
        }
        
        document.getElementById("userName").innerHTML = innerTextName;
        document.getElementById("userEmail").innerHTML = innerTextEmail;

      });
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();    
    
    return (
      
        <Layout style={{
            minHeight: '100vh',
          }}>
            
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                
                <div style={{margin:"10px 0 10px 10px"}}>
                    <div id="userName" style={{color:"white", fontSize: "25px", display:Flex}}>
                        {innerTextName}
                    </div>
                    <div id="userEmail" style={{color:"gray", fontSize: "15px", display:Flex}}>
                        {innerTextEmail}
                    </div>
                </div>
        
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                
            </Sider>

            <Layout>

                <Header style={{
                    display:Flex,
                    textAlign: "center",
                    justify_content: "center",
                    alignContent:"center",
                    margin: '0 16px',
                    padding: 0,
                    background: colorBgContainer,
                    fontSize: "50px",
                    backgroundColor: '#944E63',
                }}>
                    Мои группы
                </Header>

                <Content style={{
                    margin: '0 16px',
                    height: "100%",
                }}>
                    
                </Content>
                
            </Layout>

        </Layout>
       
    )
};
export default Invitation;