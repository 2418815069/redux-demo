import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import RouterList from "../../router/router";
import IndexMenu from "./menu";

const Container = styled.div`
width:100%;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  max-width: 980px;
`;
class Index extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <IndexMenu />
          <RouterList />
        </Row>
      </Container>
    );
  }
}

export default Index;
