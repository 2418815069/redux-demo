import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Row, Col } from "antd";
import RouterList from "../../router/router";

const suMenu = [
  { name: "全部", path: "/index/all" },
  { name: "精华", path: "/index/good" },
  { name: "问答", path: "/index/ask" },
  { name: "分享", path: "/index/share" },
  { name: "招聘", path: "/index/job" },
  { name: "测试", path: "/index/dev" }
];
class IndexMenu extends React.Component {
  handleClick = e => {
    console.log("click ", e);
  };
  render() {
    return (
      <Row>
        <Col sm={24} md={4}>
          {suMenu.map(item => {
            return (
              <NavLink key={item.name} to={item.path} activeClassName="active">
                {item.name}
              </NavLink>
            );
          })}
        </Col>
        <Col md={20}>
          <RouterList />
        </Col>
      </Row>
    );
  }
}

export default IndexMenu;
