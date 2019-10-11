import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import imgPopLogo from "../images/pop-logo.svg";

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
    <div position="sticky">
      <AppBar color="inherit">
        <Toolbar>
          <Box flexGrow={1}>
            <Link to="/" >
              <img
                src={imgPopLogo}
                style={{ width: 100 }}
              />
            </Link>
          </Box>
          <Box>
            <Tabs
              onChange={handleChange}
              value={path}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="SignUp" value="/" />
              <Tab label="About" value="/about" />
              <Tab label="Team" value="/team" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
      <Redirect to={path} /> {/* Changes page based on path */}
    </div>
  );
};
export default NavBar;
