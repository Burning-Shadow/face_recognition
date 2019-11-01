import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  GET_LIST
} from "./actionTypes";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteTodoItem = index => ({
  type: DELETE_TODO_ITEM,
  index
});

export const getListAction = data => ({
  type: GET_LIST,
  data
});
