import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  }

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;


//line 4 & 5: create two state variables using the useState hook. todos is an array that stores the list of todo items, and inputValue stores the current value of the input field.

//line 7: handleInputChange updates the inputValue state variable whenever the input field value changes.

//line 11-14: handleSubmit adds a new todo item to the todos array when the "Add Todo" button is clicked. Before adding the item, it checks if the trimmed input value is not empty to prevent adding empty or whitespace-only items.

//line 18: handleDelete removes a todo item from the todos array based on its index.

//line 24: Attach the handleInputChange function to the input field's onChange event handler and set its value to the current inputValue state.

//line 25: Attach the handleSubmit function to the "Add Todo" button's onClick event handler.

//line 27-30: use the map function to iterate over the todos array, rendering a list item for each todo. We also attach a "Delete" button to each list item with the handleDelete function, passing the item's index.