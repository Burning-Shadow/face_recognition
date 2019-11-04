import React, { Component } from "react";
import Echarts from "echarts";
import store from "../../store/index";
import GraphMessageUI from './show'
import { getStudentsList } from "../../store/actionCreators";

class GraphMessage extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState().studentMessage;
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange = () => {
    // 组件感知到 state 变化后，重新从 store 中获取 state 数据
    this.setState(store.getState().studentMessage);
  }

  render() {
    return <div id="main" style={{ width: "auto%", height: "800px" }}></div>;
  }

  componentWillMount() {
    this.init();
  }

  async init() {
    const action = getStudentsList();
    await store.dispatch(action);
    console.log(this.state.arriveList);
    await this.createChartOption();
    console.log(this.state.option)
    await this.showChart();
  }

  createChartOption() {
    const options = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        x: "left",
        data: ["已到人数 Arrived", "迟到人数 Lated", "未到人数 Absent"]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: this.state.arriveList.length, name: "已到人数 Arrived" },
            { value: this.state.lateList.length, name: "迟到人数 Lated" },
            { value: this.state.absentList.length, name: "未到人数 Absent" }
          ]
        }
      ]
    };
    this.setState({option: options});
  }

  showChart() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = Echarts.init(document.getElementById("main"));
    // 绘制图表

    myChart.title = "环形图";

    myChart.setOption(this.state.option);
  }
}

export default GraphMessage;
