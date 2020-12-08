import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [groceries, setGroceries] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
      </header>
    </div>
  );
}

export default App;
