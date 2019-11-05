import React from "react";
// import { getStudentInfo } from "../../store/actionCreators";
import { Card, Avatar, Col, Row, Modal } from "antd";

const { Meta } = Card;
// import "./index.less";

export default props => {
  // const clickFn = reqData => {
  //   props.toShow(reqData);
  // };
  return (
    <div>
      <Row gutter={16} style={{ marginBottom: 30 }}>
        <h2 style={{ fontWeight: "bold" }}>{props.title}</h2>
        {props.list.map((item, index) => (
          <Col span={6} key={index}>
            <Card
              style={{ margin: "5px" }}
              onClick={props.toShow && props.toShow(item)}
            >
              <Meta
                avatar={<Avatar size="large" src={item.faceUrl} />}
                title={item.num}
                description={"courseId: " + item.lessonId}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
