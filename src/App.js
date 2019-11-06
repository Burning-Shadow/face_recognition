import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import Header from "./publicComponents/header";

import { Layout, Menu } from "antd";
const { Content, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    let currentKey = window.location.hash.replace(/#|\?.*$/g, "");
    console.log(currentKey);
    this.setState({
      currentKey
    });
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header />
          <Layout>
            <Sider width={200} style={{ background: "#fff" }}>
              <Router>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={this.state.currentKey || "/stud_msg"}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%", borderRight: 0, marginTop: 20 }}
                >
                  <Menu.Item key="/stud_msg">
                    <Link to="/stud_msg">Student Message</Link>
                  </Menu.Item>
                  <Menu.Item key="/class_msg">
                    <Link to="/class_msg">Class Message</Link>
                  </Menu.Item>
                  <Menu.Item key="/graph_msg">
                    <Link to="/graph_msg">Graph</Link>
                  </Menu.Item>
                </Menu>
              </Router>
            </Sider>
            <Layout style={{ padding: "24px" }}>
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 280
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
        , mountNode
      </div>
    );
  }
}

export default App;
