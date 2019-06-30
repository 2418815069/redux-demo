import React from 'react';
import {NavLink} from "react-router-dom";
import { Menu } from 'antd';
import RouterList from '../../router/router';

const suMenu = [
    { name: '全部',
      path: '/index/all'
    },
    { name: '精华',
      path: '/index/good'
    },
    { name: '问答',
      path: '/index/ask'
    },
    { name: '分享',
      path: '/index/share'
    },
    { name: '招聘',
      path: '/index/job'
    },
    { name: '测试',
      path: '/index/dev'
    },
]
class IndexMenu extends React.Component {
    handleClick = e => {
      console.log('click ', e);
    };
    render() {
      return (
          <div>
            <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['0']}
            //   defaultOpenKeys={['sub1']}
            mode ="inline"
            >
            {
                suMenu.map((item, index) =>{
                    return (
                        <Menu.Item key={index}>
                        <NavLink to={item.path} activeClassName="active">{item.name}</NavLink>
                        </Menu.Item>
                    )
                })
            }
            </Menu>
            <RouterList />
        </div>
      );
    }
  }

export default IndexMenu;
