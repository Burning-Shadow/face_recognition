import React, { Component } from "react";
// import "antd/dist/antd.css";
import StudentMessageUI from "./show";
import StudentInfoUI from "./info";
import store from "../../store/index";
import "./index.less";
import { getStudentsList, getStudentInfo } from "../../store/actionCreators";

class StudentMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...store.getState().studentMessage,
      ...store.getState().studentInfo,
      isDetailWindowShow: false
    };
    store.subscribe(this.handleStoreChange);
  }

  render() {
    // console.log("=======", this.state.arriveList);
    // console.log("=======", this.state.lateList);
    // console.log("=======", this.state.absentList);
    return (
      <div>
        <StudentMessageUI
          toShow={this.openDetail}
          list={this.state.arriveList}
          title="Arrived"
        />
        <StudentMessageUI
          toShow={this.openDetail}
          list={this.state.lateList}
          title="Late"
        />
        <StudentMessageUI
          toShow={this.openDetail}
          list={this.state.absentList}
          title="Absent"
        />
        <StudentInfoUI
          visible={this.state.isDetailWindowShow}
          msg={this.state.info}
          closeDetail={this.closeDetail}
        />
      </div>
    );
  }

  openDetail = data => {
    const that = this;
    return async function() {
      // console.log('data ======= ',data);
      const action = getStudentInfo(data.num, data.lessionId, data.faceUrl);
      await store.dispatch(action);
      await that.setState({
        isDetailWindowShow: true,

      });
    };
  };

  closeDetail = data => {
    return () => {
      this.setState({
        isDetailWindowShow: data
      });
    };
  };

  handleStoreChange = () => {
    // 组件感知到 state 变化后，重新从 store 中获取 state 数据
    this.setState({
      ...store.getState().studentMessage,
      ...store.getState().studentInfo
    });
  };

  componentDidMount() {
    const action = getStudentsList();
    store.dispatch(action);
  }
}

export default StudentMessage;
