import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [groceries, setGroceries] = useState([]);

  function addGrocery(grocery) {
    setGroceries([grocery, ...groceries]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React Groceries</p>
      </header>
    </div>
  );
}

export default App;
