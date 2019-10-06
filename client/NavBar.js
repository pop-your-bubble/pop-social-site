import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

const NavBar = ({ history }) => {
  const [value, setValue] = useState(history.location.pathname);
  const [redirected, setRedirected] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setRedirected(<Redirect to={newValue} />);
    history.push(newValue);
  };

  return (
    <div>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Box flexGrow={1}>
            <img
              src="https://popsocial.app/img/pop-500px.png"
              style={{ width: 100 }}
            />
          </Box>
          <Box>
            <Tabs
              onChange={handleChange}
              value={value}
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
      {redirected}
    </div>
  );
};
export default NavBar;
