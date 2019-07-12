import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon, Row, Col, Dropdown, Menu, message } from "antd";

const navItem = [
  {
    icon: "home",
    path: "/",
    content: "首页"
  },
  {
    icon: "book",
    path: "/book",
    content: "教程"
  },
  {
    icon: "info-circle-o",
    path: "/about",
    content: "关于"
  }
];
const Constainer = styled.div`
  width: 100%;
  height: 64px;
  padding: 0 50px;
  background-color: rgba(0, 0, 0, 0.85);
  .headtitle {
    color: white;
    height: 44px;
    font-weight: 500;
    font-size: 28px;
  }
  .mainNav {
    width: 100%;
    max-width: 980px;
  }
  a {
    box-sizing: border-box;
    display: inline-block;
    text-decoration: none;
    text-align: center;
  }
  display: flex;
`;
const Daohang = styled.div`
  text-align: center;
  width: 171px;
  color: white;
  margin: 0;
  position: relative;
  ul {
    position: absolute;
  }
`;
const NavContent = styled.div`
  margin-left: 30px;
  .navitem {
    text-align: center;
    width: 96px;
  }
  display: flex;
  a {
    color: white;
  }
  a:focus,
  a:hover {
    color: blue;
    border-bottom: 2px solid blue;
  }
`;
const DividerStyled = styled.span`
  height: 44px;
  border-left: 1px solid white;
  display: inline-block;
`;

function handleButtonClick(e) {
  message.info("Click on left button.");
  console.log("click left button", e);
}

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);
class MinHeader extends React.Component {
  render() {
    return (
      <Constainer className="verticalCenter">
        <Row className="mainNav">
          <Col md={6} xs={24} className="headtitle verticalCenter">
            CNode
          </Col>
          <Col md={18} xs={0} className="vertical">
            <DividerStyled />
            <NavContent>
              {navItem.map((item, index) => {
                return (
                  <div className="navitem" key={index}>
                    <Link to={item.path}>
                      <Icon type={item.icon} />
                      {item.content}
                    </Link>
                  </div>
                );
              })}
            </NavContent>
          </Col>
        </Row>
        {/* <HeadUI className="hidden">
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/user">用户</Link>
          </li>
          <li>
            <Link to="/book">教程</Link>
          </li>
        </HeadUI> */}
        <Row>
          <Col md={0}>
            <Daohang>
              <Dropdown.Button overlay={menu}>
                <Icon type="bars" />
              </Dropdown.Button>
            </Daohang>
          </Col>
        </Row>

        {/* <div>333</div>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/user">用户</Link>
            </li>
            <li>
              <Link to="/book">教程</Link>
            </li>
            <li>
              <Link to="/user">登陆</Link>
            </li>
            <li>
              <Link to="/book">注册</Link>
            </li>
          </ul> */}
      </Constainer>
    );
  }
}

export default MinHeader;
