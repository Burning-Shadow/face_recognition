import React from "react";
import Main from "./route/main";
import About from "./route/about";
import Topic from "./route/topic";
import Home from "./route/home";
import { HashRouter as Router, Route } from "react-router-dom";

// import Home from "./route/home"

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Route path="/main" component={Main}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topics" component={Topic}></Route>
        </Home>
      </Router>
    );
  }
}


