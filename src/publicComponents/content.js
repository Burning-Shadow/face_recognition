import React from "react";
import { Layout } from "antd";
import leftSider from "./leftSider";

const { Content } = Layout;

export default props => (
  <div>
    <leftSider />
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        style={{
          background: "#fff",
          padding: '24',
          margin: 0,
          marginLeft: 200,
          minHeight: 280
        }}
      >
        {props.children}
      </Content>
    </Layout>
  </div>
);
