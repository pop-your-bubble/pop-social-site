import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const SignUp = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12}>
        <img
          src="https://popsocial.app/img/pop-500px.png"
          style={{ width: 400 }}
        />
      </Grid>
      <Typography variant="subtitle1" gutterBottom>
        Introducing the Pop mobile app. Meet new friends when you're free.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Get Early Access
      </Typography>
      <form method="POST" action="https://formspree.io/yourbubblepop@gmail.com">
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
          <Button type="submit" variant="outlined" color="primary" width="100%">
            Submit
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default SignUp;
