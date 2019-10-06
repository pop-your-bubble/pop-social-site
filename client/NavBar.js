import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import logo from "./images/pop-logo.png";

const NavBar = ({ history }) => {
  const [path, setPath] = useState(history.location.pathname);

  const handleChange = (event, newValue) => {
    // Adds to history whenever tab is clicked and is navigating to different page
    if (history.location.pathname !== newValue) {
      history.push(newValue);
    }
  };

  useEffect(() => {
    // Sets path when page is about to change
    return () => {
      setPath(history.location.pathname);
    };
  });

  return (
    <div>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Box flexGrow={1}>
            <img
              src={logo}
              style={{ width: 100 }}
            />
          </Box>
          <Box>
            <Tabs
              onChange={handleChange}
              value={path}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="SignUp" value="/" />
              <Tab label="About Us" value="/about" />
              <Tab label="Staff" value="/staff" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
      <Redirect to={path} /> {/* Changes page based on path */}
    </div>
  );
};
export default NavBar;
