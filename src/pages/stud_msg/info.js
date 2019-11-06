import React from "react";
import { Modal, Button } from "antd";
import "./info.less";
// import base64ToImg from "../../utils/base64ToImg";

export default props => {
  const state = {
    loading: false,
    visible: false
  };

  const { loading } = state;

  console.log(props);

  const data = props.msg;

  // let base64Img = data.image;
  // let imgFile = base64ToImg(base64Img, "img/png"); // 这样就会转成一个 图片文件了。
  // console.log(imgFile);

  return (
    <div>
      <div>
        <Modal
          visible={props.visible}
          title={data.group + "-" + data.name}
          onCancel={props.closeDetail && props.closeDetail(false)}
          footer={[
            <Button
              key="back"
              type="primary"
              loading={loading}
              onClick={props.closeDetail && props.closeDetail(false)}
            >
              I know
            </Button>
          ]}
        >
          <p className="item">
            <span className="leftside">学号（StudentNumber）: </span>
            <span className="rightside">{data.num}</span>
          </p>
          <p className="item">
            <span className="leftside">性别（Gender）: </span>
            <span className="rightside">
              {data.gender === "M" ? "Male" : "Female"}
            </span>
          </p>
          <p className="item">
            <span className="leftside">隶属学院（Academyic）: </span>
            <span className="rightside">{data.academy}</span>
          </p>
          <p className="item">
            <span className="leftside">进入教室时间（SignTime）: </span>
            <span className="rightside">{data.signTime}</span>
          </p>
          <p className="item">
            <span className="leftside">课程名（CourseName）: </span>
            <span className="rightside">{data.course.kcmc}</span>
          </p>
          <p className="item">
            <span className="leftside">任课教师（Teacher）: </span>
            <span className="rightside">{data.course.xm}</span>
          </p>
          <p className="item">
            <span className="leftside">教室位置（ClassRoom）: </span>
            <span className="rightside">{data.course.jcs}</span>
          </p>
          <p className="item">
            <span className="leftside">校区位置（Position）: </span>
            <span className="rightside">{data.course.xqmc}</span>
          </p>
        </Modal>
      </div>
    </div>
  );
};
