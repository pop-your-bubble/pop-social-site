import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const NavBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <img
            src="https://popsocial.app/img/pop-500px.png"
            style={{ width: 100 }}
          />
          <Tabs onChange={handleChange} value={value} indicatorColor="primary" textColor="primary">
            <Tab label="SignUp" href="/"/>
            <Tab label="About Us" href="/about"/>
            <Tab label="Staff" href="/staff"/>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
