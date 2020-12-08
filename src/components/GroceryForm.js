import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // something cool I discovered that actually randomly generates an id for you. Install with yarn add uuid, and see the handleSubmit funciton for the use

function GroceryForm({ addGrocery }) {
  const [grocery, setGrocery] = useState({
    id: "",
    item: "",
    completed: false
  });

  function handleItemInputChange(e) {
    setGrocery({ ...grocery, grocery: e.target.value });
    // ... copies the content of an object.    e is just the paramater I give it, it stands for event. target.value is a built in React thing!
  }

  function handleSubmit(e) {
    console.log('made it')
    e.preventDefault(); //prevent default keeps the form form like running over and over again and doing an infinite loop which will crash
    if (grocery.item.trim()) {  // .trim will trim off any white space
      addGrocery({ ...grocery, id: uuidv4() }); // 
      setGrocery({ ...grocery, item: "" }); // this is actually really interesting, it makes more sense now to me. This 
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="item"
        type="text"
        defaultValue={grocery.item}    // {grocery.item}
        onChange={handleItemInputChange}
      />
      <button type="submit">add item</button>
    </form>
  );
};

export default GroceryForm;