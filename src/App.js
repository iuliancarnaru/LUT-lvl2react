import React from 'react';
import './App.css';
import Toggle from './Toggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toggle>
          <h1>Toggle me</h1>
        </Toggle>
      </header>
    </div>
  );
}

export default App;
