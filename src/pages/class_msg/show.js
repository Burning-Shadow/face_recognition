// import React from "react";
// import { Table } from "antd";

// export default props => (
//   <div>
//     <Table dataSource={props.dataSource} columns={props.columns} bordered />;
//   </div>
// );
import React from "react";
import "./index.css";

export default props => {
  const data = props.dataSource;
  // console.log(data);
  return (
    <div>
      <table
        style={{
          cellspacing: 0,
          align: "center",
          width: "100%",
          cellpadding: "8"
        }}
      >
        <tbody>
          <tr>
            <th>节次</th>
            <th>星期一</th>
            <th>星期二</th>
            <th>星期三</th>
            <th>星期四</th>
            <th>星期五</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index * 2 + 1 + "-" + (index * 2 + 2)}</td>
              <td>
                <h3>{item.Monday ? item.Monday.kcmc : " "}</h3>
                <div>
                  {item.Monday
                    ? item.Monday.cdmc +
                      "\n" +
                      item.Monday.xm +
                      "\n" +
                      item.Monday.xqmc
                    : "\n\n\n"}
                </div>
              </td>
              <td>
                <h3>{item.Tuesday ? item.Tuesday.kcmc : " "}</h3>
                <div>
                  {item.Tuesday
                    ? item.Tuesday.cdmc +
                      "\n" +
                      item.Tuesday.xm +
                      "\n" +
                      item.Tuesday.xqmc
                    : "\n\n\n"}
                </div>
              </td>
              <td>
                <h3>{item.Wednesday ? item.Wednesday.kcmc : " "}</h3>
                <div>
                  {item.Wednesday
                    ? item.Wednesday.cdmc +
                      "\n" +
                      item.Wednesday.xm +
                      "\n" +
                      item.Wednesday.xqmc
                    : "\n\n\n"}
                </div>
              </td>
              <td>
                <h3>{item.Thursday ? item.Thursday.kcmc : " "}</h3>
                <div>
                  {item.Thursday
                    ? item.Thursday.cdmc +
                      "\n" +
                      item.Thursday.xm +
                      "\n" +
                      item.Thursday.xqmc
                    : "\n\n\n"}
                </div>
              </td>
              <td>
                <h3>{item.Friday ? item.Friday.kcmc : " "}</h3>
                <div>
                  {item.Friday
                    ? item.Friday.cdmc +
                      "\n" +
                      item.Friday.xm +
                      "\n" +
                      item.Friday.xqmc
                    : "\n\n\n"}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
