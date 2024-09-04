import React, { useState } from 'react';

export function ControlledInput() {
  const [text, setText] = useState('');    //create a state variable text using the useState hook and set its initial value to an empty string.

  function handleInputChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>Input text: {text}</p>             
    </div>
  );
}

export default ControlledInput;

//In React, a controlled component is a component where the state of the input field is directly controlled by React. The value of the input field is set by a state variable, and any change in the value triggers an event handler to update the state.

//line 6: create a new function called handleInputChange that takes the event object as a parameter. This function is responsible for updating the text state variable with the current value of the input field.

//line 7: In the component's JSX, we set the value attribute of the input field to the current text state. This makes the input field a controlled component, as its value is directly controlled by React.

//line 12: connect the handleInputChange function to the onChange event handler of the input field. This ensures that the function is called every time the input field's value changes.

//line 13: use the text state variable to display the current text in a paragraph element.