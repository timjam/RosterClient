import React from 'react';
// import logo from './logo.svg';
import SignIn from './views/signin/SignIn';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;

/**
 * <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
 */