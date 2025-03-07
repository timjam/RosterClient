import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../services/Auth';
const ProtectedContent = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      if (Auth.isAuthenticated()) {
        return (
          <Component {...props} />
        );
      } else {
        return (
          <Redirect to={{
            pathname: '/auth/signin',
            state: { from: props.location },
          }} />
        );
      }
    }} />
  );
};

export default ProtectedContent;
