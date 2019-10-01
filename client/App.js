import React from "react";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import About from "./About";
import Staff from "./Staff";
import Footer from "./Footer";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={SignUp} />
        <Route path="/about" exact component={About} />
        <Route path="/staff" exact component={Staff} />
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default App;
