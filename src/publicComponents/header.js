import React from "react";
import { Layout } from "antd";
const { Header } = Layout;

export default () => (
  <Header className="header">
    <div className="logo" />
    <div style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
      Face Recogonition
    </div>
  </Header>
);
