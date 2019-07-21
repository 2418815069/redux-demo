import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f2f5;
`;
class MinFooter extends React.Component{
    render() {
      return (
        <Container>
          <div>京ICP备08102442号-1 2007-2018 MIAOV.COM 版权所有</div>
        </Container>
      )
    }   
}

export default MinFooter;
