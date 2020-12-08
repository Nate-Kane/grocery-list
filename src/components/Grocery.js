import React from "react";

function Grocery({ grocery }) {
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" />
      <li
        style={{
          color: "red",
          textDecoration: grocery.completed ? "line-through" : null
        }}
      >
        {grocery.item}</li>
      <button>X</button>
    </div>
  );
}

export default Grocery;