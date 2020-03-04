import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import Auth from '../services/Auth';

const AuthStack = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      if(!Auth.isAuthenticated()) {
        return (
          <Component {...props} />
        );
      } else {
        return (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location },
          }} />
        );
      }
    }} />
  );
};

export default AuthStack;

/** 
 * <Route path="/auth" component={AuthStack} />
 * 
 * AuthStack = () => {
 *  <Route path={match.url + "/signin"} component={SignIn} />
 *  <Route path={match.url + "/signup"} component={SignUp} />
 * }
 * 
 * Oolsou tsekedaut
 * https://reacttraining.com/react-router/web/guides/philosophy/responsive-routes
 * https://stackoverflow.com/questions/48817305/advantages-of-dynamic-vs-static-routing-in-react
*/