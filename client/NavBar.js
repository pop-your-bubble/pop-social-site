import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const NavBar = () => {
  const [value, setValue] = useState(0);
  const [redirected, setRedirected] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setRedirected(<Redirect to="/" />);
    } else if (newValue === 1) {
      setRedirected(<Redirect to="/about" />);
    } else if (newValue === 2) {
      setRedirected(<Redirect to="/staff" />);
    }
  };

  return (
    <div>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <img
            src="https://popsocial.app/img/pop-500px.png"
            style={{ width: 100 }}
          />
          <Tabs
            onChange={handleChange}
            value={value}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="SignUp" />
            <Tab label="About Us" />
            <Tab label="Staff" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {redirected}
    </div>
  );
};
export default NavBar;
