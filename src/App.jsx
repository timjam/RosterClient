import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SignIn from './views/signin/SignIn';
import SignUp from './views/signup/SignUp';
import MainApp from './views/mainview/MainApp';
import ProtectedContent from './components/ProtectedContent';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <ProtectedContent path="/" component={MainApp} />
      </Switch>
    </Router>
  );
}

export default App;
