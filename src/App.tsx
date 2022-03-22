import React from 'react';
import logo from './logo.svg';
import WelcomeText from './Component/WelcomeText'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Today :D 
        </a>
        <WelcomeText></WelcomeText>
      </header>
    </div>
  );
}

export default App;
