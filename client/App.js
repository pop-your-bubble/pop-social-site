import React from "react";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import About from "./About";
import Staff from "./Staff";
import { BrowserRouter, Route } from "react-router-dom";
// import Route from "react-router-dom/Route";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={SignUp} />
        <Route path="/about" exact component={About} />
        <Route path="/staff" exact component={Staff} />
      </BrowserRouter>
    </>
  );
};
export default App;
