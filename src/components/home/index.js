import React, { Component } from 'react'
import { Layout } from 'antd';

const { Footer, Content, Header } = Layout;

export default class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header>
          </Header>
          <Content>
            <a href="login/index.html">login</a>
            <br />
            <a href="register/index.html">register</a>
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
    )
  }
}
