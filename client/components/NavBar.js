import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import imgPopLogo from "../images/pop-logo.svg";

const NavBar = ({ history }) => {
  const [path, setPath] = useState(history.location.pathname);

  const trigger = useScrollTrigger();

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
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar color="inherit" position="fixed">
          <Toolbar>
            <Box flexGrow={1}>
              <Link to="/">
                <img src={imgPopLogo} style={{ width: 100 }} />
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
      </Slide>
      <Redirect to={path} /> {/* Changes page based on path */}
    </div>
  );
};
export default NavBar;
