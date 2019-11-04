import { combineReducers } from "redux";

import studentMessage from "./studentMessage";
import classMessage from "./classMessage";
import graphMessage from "./graphMessage";

export default combineReducers({
  studentMessage,
  classMessage,
  graphMessage
});
