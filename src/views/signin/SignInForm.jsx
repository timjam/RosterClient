import React from 'react';
import {
  Paper,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import './SignInForm.css';

const SignInForm = (props) => {
  return (
    <Paper className="SignIn"
      variant="outlined"
      elevation={3} >
      <Grid container className="SignIn-formContainer"
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center" >
        <Grid item md={true} sm={true} xs={true}>
          <TextField
            id="standard-basic"
            label="Username"
            fullWidth
            required
            value={props.username}
            onChange={props.changeUsername}
            />
        </Grid>
        <Grid item md={true} sm={true} xs={true}>
          <TextField type="password"
            id="standard-basic"
            label="Password"
            fullWidth
            required
            value={props.password}
            onChange={props.changePassword}
            />
        </Grid>
        <Grid container alignItems="center" justify="space-evenly" >
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                />
              }
              label="Remeber me" />
          </Grid>
          <Grid item>
            <Button
              disableFocusRipple
              disableRipple
              style={{ textTransform: "none" }}
              variant="text"
              color="primary">Forgot password?</Button>
          </Grid>
        </Grid>
        <Grid container justify="center" style={{ marginTop: '10px' }}>
          <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={props.signIn}>Sign in</Button>
        </Grid>
      </Grid>
    </Paper>
);
};

export default SignInForm;
