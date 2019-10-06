import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import About from "./About";
import Footer from "./Footer";
import NavBar from "./NavBar";
import PrivacyPolicy from "./PrivacyPolicy";
import SignUp from "./SignUp";
import Staff from "./Staff";
import TermsOfUse from "./TermsOfUse";

const history = createBrowserHistory();

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Route component={NavBar} />
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/about" component={About} />
          <Route path="/staff" component={Staff} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/termsofuse" component={TermsOfUse} />
          <Redirect to="/" />
        </Switch>
        <Route component={Footer} />
      </Router>
    </div>
  );
};
export default App;
