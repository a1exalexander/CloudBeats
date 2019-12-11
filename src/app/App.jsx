import React from "react";
import "../scss/style.scss";
import {
  Layout,
} from "antd";
import TheMenu from '../components/TheMenu';
import TheHeader from "../components/TheHeader";
import Suites from "../views/tests/Suites";

const { Content } = Layout;

const App = () => {

  return (
    <Layout className="app">
      <TheMenu />
      <Layout>
        <TheHeader />
        <Content className="app__content-wrapper">
          <Suites />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
