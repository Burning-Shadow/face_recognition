import React from "react";
import App from "./App";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// import Login from './'
// import Main from "./route/main";
// import About from "./route/about";
// import Topic from "./route/topic";
// import Home from "./route/home";

// import Home from "./route/home"

import studentMessage from "./pages/stud_msg/index";
import classMessage from "./pages/class_msg/index";
import graphMessage from "./pages/graph_msg/index";
import NoMatch from "./pages/404";

export default function IRouter() {
  return (
    <Router>
      <App>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/stud_msg"></Redirect>}
          ></Route>
          <Route path="/stud_msg" component={studentMessage} />
          <Route path="/class_msg" component={classMessage} />
          <Route path="/graph_msg" component={graphMessage} />

          {/* <Route
              path="/admin"
              render={() => (
                <Admin> 
                  <Route path="/admin/" component={NoMatch} />
                  <Route path="/nomatch" component={NoMatch} />
                  <Route component={NoMatch} />
                </Admin>
              )}
            /> */}
          <Route component={NoMatch} />
        </Switch>
      </App>
    </Router>
  );
}
