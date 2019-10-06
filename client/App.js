import React from "react";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";

import About from "./About";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Staff from "./Staff";

const history = createBrowserHistory();

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Route component={NavBar} />
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/about" exact component={About} />
          <Route path="/staff" exact component={Staff} />
          <Route component={SignUp} />
        </Switch>
        <Route component={Footer} />
      </Router>
    </div>
  );
};
export default App;
