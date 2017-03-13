import { Layout, Menu, Breadcrumb, Icon ,Switch } from 'antd';
const {Content,Sider,Header} = Layout;
const SubMenu =  Menu.SubMenu;
import "./MainLayout.less";
import "../Common/Common.less";
import React, { Component } from 'react';
import banner from "../../assets/banner.png";
import { BackTop } from 'antd';
import { Link } from 'dva/router'

class MainLayout extends Component{

      state = {
        collapsed: false,
        current: 'inline'
      };

      render() {
        let children = this.props.children ? this.props.children:"";
        let pathname = this.props.location  ? this.props.location.pathname : "";
        pathname = pathname == "/" ? "/users" : pathname;
        console.log("pathname",pathname);
        return (
          <Layout id="components-main-layout" >

            <Header className="top-header">
              <div>
                <img src={ banner }/>
              </div>

              <div className="header-userInfo">
                <p>
                  <span className="_name" >sofia </span>
                  <span className="_btn" >
                    [<a href="#/resetPwd">修改密码</a>|<a>修改信息</a>｜<a>退出</a>[
                  </span>
                </p>
                <p className="_date" >日期：2016-12-23</p>
              </div>

            </Header>
            <Layout>
              <Sider className="left-subMenu">
                <Menu mode="inline" defaultSelectedKeys={[pathname]}>
                  <SubMenu key="sub1" title={<span><Icon type="mail" /><span className="nav-text">债权管理</span></span>} >
                    <Menu.Item key="/BondpackageManage"><Link to="/BondpackageManage">债权包管理</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="appstore" /><span className="nav-text">资方管理</span></span>}>
                    <Menu.Item key="/CreditorManage"><Link to="/CreditorManage">资方管理</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>订单管理</span></span>}>
                    <Menu.Item key="/OrderLis"><Link to="/OrderList">订单列表</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub4" title={<span><Icon type="appstore" /><span>统计图表</span></span>}>
                    <Menu.Item key="/SuccessBing"><Link to="/SuccessBing">未到期债权统计</Link></Menu.Item>
                    <Menu.Item key="/chart"><Link to="/chart">可卖债权统计</Link></Menu.Item>
                    <Menu.Item key="/RechargeStrategy"><Link to="/RechargeStrategy">债权历史数据</Link></Menu.Item>
                    <Menu.Item key="/dailyOrder"><Link to="/dailyOrder">债权每日放款量</Link></Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>

              <Layout>
                <Content className="main-content" >
                  { children }
                </Content>
              </Layout>

              <BackTop/>
            </Layout>
          </Layout>

        );
      }
  }
export default MainLayout;
