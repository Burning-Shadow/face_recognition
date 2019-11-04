import React, { Component } from "react";
import store from "../../store/index";
import ClassMessageUI from "./show";
import { getCoursesList } from "../../store/actionCreators";

class ClassMessage extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState().classMessage;
    store.subscribe(this.handleStoreChange);
  }

  render() {
    // console.log("=======", this.state);
    return (
      <div>
        <ClassMessageUI dataSource={this.state.dataSource} columns={this.state.columns} />
      </div>
    );
  }

  handleStoreChange = () => {
    // 组件感知到 state 变化后，重新从 store 中获取 state 数据
    this.setState(store.getState().classMessage);
  };

  componentWillMount() {
    const action = getCoursesList();
    store.dispatch(action);
  }
}

export default ClassMessage;
