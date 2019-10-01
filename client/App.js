import React from "react";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import About from "./About";
import { BrowserRouter, Route } from "react-router-dom";
// import Route from "react-router-dom/Route";

const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Route path="/" exact component={SignUp} />
        <Route path="/about" exact component={About} />
      </BrowserRouter>
    </>
  );
};
export default App;
