import React, { useState } from 'react';
import SignInForm from './SignInForm';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (event) => {
    event.preventDefault();
    console.log(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <SignInForm
      username={username}
      password={password}
      changeUsername={event => setUsername(event.target.value)}
      changePassword={event => setPassword(event.target.value)}
      signIn={signIn}
    />
  );
};

export default SignIn;
