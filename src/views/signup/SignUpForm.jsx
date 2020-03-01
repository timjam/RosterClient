import React from 'react';
import {
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import './SignUp.css';

const SignUpForm = (props) => {
  return (
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
      <Grid item md={true} sm={true} xs={true}>
        <TextField type="password"
          id="standard-basic"
          label="Confirm password"
          fullWidth
          required
          value={props.confirmPassword}
          onChange={props.changeConfirmPassword}
          />
      </Grid>
      <Grid container justify="center" style={{ marginTop: '10px' }}>
        <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={props.signUp}>Sign Up</Button>
      </Grid>
    </Grid>
  );
};

export default SignUpForm;
