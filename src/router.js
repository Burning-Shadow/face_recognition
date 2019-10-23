import React from "react";
import App from "./App";
import { HashRouter, Route, Switch } from "react-router-dom";

// import Login from './'
// import Main from "./route/main";
// import About from "./route/about";
// import Topic from "./route/topic";
// import Home from "./route/home";

// import Home from "./route/home"
import Login from "./pages/login";
import Admin from "./pages/admin";
import NoMatch from "./pages/404";

export default class IRouter extends React.Component {
  render() {
    return (
      <App>
        <HashRouter>
          <Switch>
            <Route path="/login" component={Login} />
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
            <Route path="/admin" component={Admin} />
            <Route component={NoMatch} />
          </Switch>

          {/* <Home>
          <Route path="/main" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topic} />
        </Home> */}
        </HashRouter>
      </App>
    );
  }
}
