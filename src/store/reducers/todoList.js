import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  GET_LIST
} from "../actionTypes";

// reducer 可以接收 state，但绝不能修改 state。return 出来的数据最终返回给了 store
const defaultState = {
  inputValue: "",
  list: ["fatewang", "lexliang", "songjunwang", "leohengwang", "gismanli"]
};

export default (state = defaultState, action) => {
  // // state 为上一次所保存的数据（value），action 为用户所传递过来的描述（type）
  // // console.log("state = ", state);
  // // console.log("action = ", action);

  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newState.inputValue = action.value;
      break;
    case ADD_TODO_ITEM:
      newState.list.push(newState.inputValue);
      newState.inputValue = "";
      break;
    case DELETE_TODO_ITEM:
      newState.list.splice(action.index, 1);
      break;
    case GET_LIST:
      newState.list = action.data.data.list;
      break;
    default:
  }
  return newState || state;
};
