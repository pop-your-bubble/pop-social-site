import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";
import Button from "@material-ui/core/Button";

import useScrollToTopOnMount from "../customHooks/useScrollToTopOnMount";

import imgPopIcon from "../images/pop-icon.png";

const SignUp = () => {
  useScrollToTopOnMount();
  return (
    <div style={{ padding: "2%" }}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <img src={imgPopIcon} style={{ width: 350 }} />
        </Grid>
        <Typography variant="h4" gutterBottom>
          Pop your bubble.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Introducing the Pop mobile app. Meet new friends when you're free.
        </Typography>
        <Typography variant="button" gutterBottom>
          Get Early Access
        </Typography>
        <Grid item xs={12} md={6}>
          <ButtonGroup fullWidth>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              target="_blank"
              rel="noopener noreferrer"
              href="https://testflight.apple.com/join/U3JPFq2l"
            >
              <AppleIcon />
              &nbsp;&nbsp;iOS
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              target="_blank"
              rel="noopener noreferrer"
              href="https://play.google.com/apps/testing/com.yourbubblepop"
            >
              <AndroidIcon />
              &nbsp;&nbsp;Android
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
