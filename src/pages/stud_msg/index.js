import React, { Component } from "react";
// import "antd/dist/antd.css";
import StudentMessageUI from "./show";
import store from "../../store/index";
import "./index.less";
import { getStudentsList } from "../../store/actionCreators";

class StudentMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...store.getState().studentMessage,
      isDetailWindowShow: false
    };
    this.state = store.getState().studentMessage;
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
      </div>
    );
  }

  openDetail = () => {
    this.setState({ isDetailWindowShow: true });
  };

  handleStoreChange = () => {
    // 组件感知到 state 变化后，重新从 store 中获取 state 数据
    this.setState(store.getState().studentMessage);
  };

  componentDidMount() {
    const action = getStudentsList();
    store.dispatch(action);
  }
}

export default StudentMessage;
