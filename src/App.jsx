import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import SignIn from './views/signin/SignIn';
import SignUp from './views/signup/SignUp';
// import NotFound from './views/notfound/NotFound';
import EventList from './views/eventlist/EventList';
import CreateEvent from './views/createevent/CreateEvent';
import ProtectedContent from './components/ProtectedContent';
import './styles/App.css';

const AuthStack = ({ match, ...rest }) => {
  return (
    <>
      <Route path={match.url + "/signin"} component={SignIn} />
      <Route path={match.url + "/signup"} component={SignUp} />
      <Redirect from="*" to="signin" />
    </>
  );
};

const ApplicationStack = ({ match, ...rest }) => {
  return (
    <>
      <ProtectedContent path={match.url + "/events"} component={EventList} />
      <ProtectedContent path={match.url + "/create"} component={CreateEvent} />
    </>
  )
};
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthStack} />
        <ProtectedContent path="/" component={ApplicationStack} />
        <Redirect from="*" to="events" />
      </Switch>
    </Router>
  );
}

export default App;
