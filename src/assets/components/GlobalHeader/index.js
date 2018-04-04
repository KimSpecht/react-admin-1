import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Dropdown, Avatar, Menu } from 'antd';

import styles from './index.less';

const { Header } = Layout;

class GlobalHeader extends React.PureComponent {
  render() {
    const currentUser = {
      name: 'travisxu',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    };
    const menu = (
      <Menu
        className={styles.menu}
        selectedKeys={[]}
        onClick={this.handleMenuClick}
      >
        <Menu.Item disabled>
          <Icon type="user" />个人中心
        </Menu.Item>
        <Menu.Item disabled>
          <Icon type="setting" />设置
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          <Link to="/user/login">退出登录</Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <Header className={styles.header}>
        <Icon className={styles.trigger} type="menu-unfold" />
        <div className={styles.right}>
          <Dropdown overlay={menu}>
            <span className={`${styles.action} ${styles.account}`}>
              <Avatar
                size="small"
                className={styles.avatar}
                src={currentUser.avatar}
              />
              {currentUser.name}
            </span>
          </Dropdown>
        </div>
      </Header>
    );
  }
}

export default GlobalHeader;
