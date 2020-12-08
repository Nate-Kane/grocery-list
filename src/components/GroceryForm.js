import React from "react";

function GroceryForm() {
  const [grocery, setGrocery] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    setGrocery({ ...grocery, grocery: e.target.value });
    // ... copies the content of an object.    e is just the paramater I give it, it stands for event. target.value is a built in React thing!
  }

  return (
    // here I could also just do form onSubmit... instead of a submit button. Good to know I can do both
    <form>
      <input 
        name="item"
        type="text"
        value={grocery.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit" /> 
    </form>
  );
};

export default GroceryForm;