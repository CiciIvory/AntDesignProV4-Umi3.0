import React from 'react';
import { PageLoading } from '@ant-design/pro-layout';
import { Redirect, connect } from 'umi';
import { stringify } from 'querystring';


class SecurityLayout extends React.Component {

  componentDidMount () {
    // 登录判断 （有无token跳转登录等）

  }

  render () {
    const { children, keycloak, platformId } = this.props;
    return children;
  }
}

export default SecurityLayout;
