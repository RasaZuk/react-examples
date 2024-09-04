import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0); //create a state variable count using the useState hook and set its initial value to 0

  function handleIncrement() {      //create a new function called handleIncrement that increments the count state variable by 1.
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>      
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;

//line12: connect the handleIncrement function to the onClick event handler of the button. This ensures that the function is called every time the button is clicked.

//line 13: use the count state variable to display the current count in a paragraph element.