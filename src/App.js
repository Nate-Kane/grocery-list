import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import GroceryForm from "./components/GroceryForm";
import GroceryList from "./components/GroceryList";

function App() {
  const [groceries, setGroceries] = useState([]);

  function addGrocery(grocery) {
    setGroceries([grocery, ...groceries]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Grocery List</p>
        <GroceryForm addGrocery={addGrocery}/>
        <GroceryList groceries={groceries} />
      </header>
    </div>
  );
}

export default App;
