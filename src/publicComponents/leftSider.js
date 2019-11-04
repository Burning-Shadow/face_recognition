import React from "react";
import { Layout } from "antd";
import { Menu } from "antd";
import { HashRouter as Router, Link } from "react-router-dom";

const { Sider } = Layout;

export default () => (
  <Layout>
      <Sider width={200} style={{ background: "#fff" }}>
        <Router>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1">
              <Link to="/stud_msg">Student Message</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/class_msg">Class Message</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/graph_msg">Graph</Link>
            </Menu.Item>
          </Menu>
        </Router>
      </Sider>
      
    </Layout>
);
