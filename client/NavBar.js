import React, { useState } from "react";
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
    setRedirected(<Redirect to={newValue} />);
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
            <Tab label="SignUp" value="/" />
            <Tab label="About Us" value="/about" />
            <Tab label="Staff" value="staff" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {redirected}
    </div>
  );
};
export default NavBar;
