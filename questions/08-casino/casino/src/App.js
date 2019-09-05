import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import CardDeck from './CardDeck';

function App() {
  const [numberOfCardsToDeal, setNumberOfCardsToDeal] = useState(5);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to the</h2>
        <h1>React Hooks Casino</h1>
      </div>
        <h1>Cards Dealt: {count}</h1>
        <button onClick={() => setCount(count + 5)}>Deal {numberOfCardsToDeal} Cards</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <CardDeck />
    </div>
  );
}

export default App;
