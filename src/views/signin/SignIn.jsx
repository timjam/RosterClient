import React, { useState } from 'react';
import {
  Paper,
  Button,
} from '@material-ui/core';
import SignInForm from './SignInForm';
import Auth from '../../services/Auth';
import './SignIn.css';
import { Redirect } from 'react-router-dom';

const SignIn = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const { from } = props.location || { from: { pathname: '/' } };

  const signUp = () => {
    console.log('Sign up dude');
  };

  const signIn = (event) => {
    event.preventDefault();
    console.log(username, password);
    Auth.signIn();
    setRedirectToReferrer(true);
    setUsername('');
    setPassword('');
  };

  if (redirectToReferrer) {
    return (
      <Redirect to={from} />
    );
  }

  return (
    <Paper className="SignIn"
    variant="outlined"
    elevation={3} >
      <SignInForm
        username={username}
        password={password}
        changeUsername={event => setUsername(event.target.value)}
        changePassword={event => setPassword(event.target.value)}
        signIn={signIn}
      />
      <label>Don't have an account?</label>
      <Button
        disableFocusRipple
        disableRipple
        style={{ textTransform: "none" }}
        variant="text"
        color="primary"
        onClick={signUp}>Sign Up instead</Button>
    </Paper>
  );
};

export default SignIn;
