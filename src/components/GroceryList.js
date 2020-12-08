import React, { Grocery } from "react";

function GroceryList({ groceries }) {
  return (
    <ul>
      {groceries.map(grocery => (
        <Grocery key={grocery.id} grocery={grocery} />
      ))}
    </ul>
  );
}

export default GroceryList;