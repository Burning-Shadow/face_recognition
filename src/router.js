import React from "react";
import App from "./App";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// import Login from './'
// import Main from "./route/main";
// import About from "./route/about";
// import Topic from "./route/topic";
// import Home from "./route/home";

// import Home from "./route/home"
import Login from "./pages/login";
import Admin from "./pages/admin";
import NoneMatch from "./pages/404";

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route component={NoneMatch} />
          </Switch>
        </App>
        {/* <Home>
          <Route path="/main" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topic} />
        </Home> */}
      </Router>
    );
  }
}
