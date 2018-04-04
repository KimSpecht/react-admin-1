import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

import SiderMenu from '../components/SiderMenu';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const { Content } = Layout;
class BasicLayout extends React.PureComponent {
  render() {
    const { getRouteData } = this.props;
    return (
      <Layout>
        <SiderMenu />
        <Layout>
          <GlobalHeader />
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <div style={{ minHeight: 'calc(100vh - 260px)' }}>
              <Switch>
                {getRouteData().map(item => (
                  <Route
                    exact={item.exact}
                    key={item.path}
                    path={item.path}
                    component={item.component}
                  />
                ))}
              </Switch>
            </div>
            <GlobalFooter />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
