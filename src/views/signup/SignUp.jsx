import React, { useState } from 'react';
import {
  Paper,
} from '@material-ui/core';
import SignUpForm from './SignUpForm';
import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUp = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log(confirmPassword);
    console.log('Sign up dude');
  };

  return (
    <Paper className="SignUp"
    variant="outlined"
    elevation={3} >
      <SignUpForm
        username={username}
        password={password}
        confirmPassword={confirmPassword}
        changeUsername={event => setUsername(event.target.value)}
        changePassword={event => setPassword(event.target.value)}
        changeConfirmPassword={event => setConfirmPassword(event.target.value)}
        signUp={signUp}
      />
    </Paper>
  );
};

export default SignUp;
