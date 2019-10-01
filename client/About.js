import React from "react";
import Typography from "@material-ui/core/Typography";

const About = () => {
  return (
    <div>
      <img src="https://popsocial.app/img/mockup1.png" style={{ width: 400 }} />
      <Typography variant="subtitle1" gutterBottom>
        Make new connections.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Meet new friends in person based on your own interests in your
        community. Create and foster with acquaintances that are selected to
        most likely have similar interests to you.
      </Typography>
    </div>
  );
};

export default About;
