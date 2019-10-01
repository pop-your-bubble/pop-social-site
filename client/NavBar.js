import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const NavBar = () => {
  return (
    <div>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <img
            src="https://popsocial.app/img/pop-500px.png"
            style={{ width: 100 }}
          />
          <Tabs value={0} indicatorColor="primary" textColor="primary">
            <Tab label="SignUp" />
            <Tab label="About Us" />
            <Tab label="Staff" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
