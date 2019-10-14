import React, { Component } from "react";
// import axios from "axios";
import "antd/dist/antd.css";
import store from "../store/index";
import TodoListUI from "../UIComponents/TodoListUI";
import "./index.less";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteTodoItem
} from "../store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);

    // 订阅事件
    store.subscribe(this.handleStoreChange);
    // console.log(store.getState());
  }

  render() {
    return (
      <div className="testdiv">
        <TodoListUI
          inputValue={this.state.inputValue}
          handleInputChange={this.handleInputChange}
          handleBtnClick={this.handleBtnClick}
          list={this.state.list}
          handleItemDelete={this.handleItemDelete}
        />
      </div>
    );
  }

  handleStoreChange() {
    // 组件感知到 state 变化后，重新从 store 中获取 state 数据
    this.setState(store.getState());
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
    // console.log(e.target.value);
  }

  handleBtnClick() {
    if (this.state.inputValue.trim() === "") return;
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteTodoItem(index);
    store.dispatch(action);
  }

  // componentDidMount() {
  //   axios
  //     .get("")
  //     .then(() => {})
  //     .finally(() => {})
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }
}

export default TodoList;
