import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import logo from "./images/pop-logo.png";

const SignUp = () => {
  return (
    <div style={{ padding: 30 }}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <img
            src={logo}
            style={{ width: 400 }}
          />
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
        <form
          method="POST"
          action="https://formspree.io/yourbubblepop@gmail.com"
        >
          <Grid item xs={12}>
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              name="_replyto"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon color="disabled" />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="outlined" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};

export default SignUp;
