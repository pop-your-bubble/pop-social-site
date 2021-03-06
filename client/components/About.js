import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useScrollToTopOnMount from "../customHooks/useScrollToTopOnMount";

import imgPopApp from "../images/pop-app.png";
import imgPeople from "../images/people.jpg";

const About = () => {
  useScrollToTopOnMount();
  return (
    <div style={{ padding: "3%" }}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <img src={imgPopApp} style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5" gutterBottom>
            Make new connections.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Meet new friends in person based on your own interests in your
            community. Create and foster with acquaintances that are selected to
            most likely have similar interests to you.
          </Typography>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <Typography variant="h5" gutterBottom>
            Plan when and where to meet.
          </Typography>
          <Typography variant="body2" gutterBottom></Typography>
        </Grid>
        <Grid item xs={5}>
          <img src={imgPeople} style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={5}>
          <Typography variant="h5" gutterBottom>
            Create communities.
          </Typography>
          <Typography variant="body2" gutterBottom>
            With Pop, you'll be able to create your own communities and get
            matched in groups, all based on your interests and your feedback to
            previous matches.
          </Typography>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default About;
