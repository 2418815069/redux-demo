import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Constainer = styled.div`
    @media screen and (max-width:750px){ /*三栏布局*/
        .hidden{
                display: none;
            }
        }
    display: flex;
    ul{
        width: 276px;
        display: flex;
        padding-left: 0;
        margin: 0;
    }
    ul li{
        flex:1;
        list-style: none;
        line-height: 31px;
    }
    a{
        box-sizing: border-box;
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: 63px;
        text-decoration: none;
        color: white;
        text-align: center;
    }
    a:focus,a:hover{
        color: blue;
        border-bottom: 2px solid blue;
    }
`;
const Title = styled.h1`
    text-align: center;
    width: 171px;
    line-height: 64px;
    color: white;
    margin: 0;
`;
const Daohang = styled.div`
    text-align: center;
    width: 171px;
    line-height: 64px;
    color: white;
    margin: 0;
`;
class MinHeader extends React.Component{
    render() {
      return (
        <Constainer>
            <Title>CNode</Title>
            <ul className="hidden">
            <li><Link to="/">首页</Link></li>
            <li><Link to="/user">用户</Link></li>
            <li><Link to="/book">教程</Link></li>
            </ul>
            <Daohang>
            <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/user">用户</Link></li>
            <li><Link to="/book">教程</Link></li>
            <li><Link to="/user">登陆</Link></li>
            <li><Link to="/book">注册</Link></li>
            </ul>
            </Daohang>
        </Constainer>
      )
    }   
}

export default MinHeader;
