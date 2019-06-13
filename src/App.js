import React from 'react';
import logo from './logo.svg';
import './App.css';
import DogsListContainer from './components/DogsListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <main>
        <DogsListContainer />
      </main>
    </div>
  );
}

export default App;
