import { GET_STUDENT_LIST } from "../actionTypes";

const defaultState = {
  name: "fatewang",
  academy: "计算机学院",
  group: "软件1603",
  signTime: "2019-11-04 10:10:40.0",
  gender: "M",
  course: JSON.stringify({
    cdmc: " FF305  ",
    className: null,
    isDou: 0,
    jcs: "3-4",
    kcmc: "操作系统A",
    status: null,
    xm: " 陈莉君",
    xqjmc: "1",
    xqmc: " 长安校区东区 ",
    zcd: "9"
  }),
  image: "",
  num: "04163067",

};

export default (state = defaultState, action) => {
  // state 为上一次所保存的数据（value），action 为用户所传递过来的描述（type）

  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case GET_STUDENT_LIST:
      console.log(action);
      newState.name = action.academy;
      newState.name = action.name;
      newState.name = action.group;
      newState.name = action.signTime;
      newState.name = action.gender;
      newState.name = action.course;
      newState.name = action.image;
      newState.name = action.num;
      break;
    default:
  }
  return newState || state;
};
