import React from "react";
import { Table } from "antd";



export default props => (
  <div>
    <Table dataSource={props.dataSource} columns={props.columns} bordered />;
  </div>
);
