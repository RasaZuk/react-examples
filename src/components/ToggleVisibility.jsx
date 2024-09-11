import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);        

  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={handleToggleVisibility}>Show/Hide Text</button>
      {isVisible && <p>Toggle me!</p>}
    </div>
  );
}
export default ToggleVisibility;

// React allows you to conditionally render elements based on a certain condition. In this exercise, we'll use conditional rendering to display or hide the text element based on the visibility state.

//React supports various event handlers, such as onClick, which allows you to execute a function when an element is clicked. In this exercise, we'll use the onClick event handler to toggle the visibility state when the button is clicked.

//line4:  create a state variable isVisible using the useState hook and set its initial value to false, indicating that the text should be initially hidden

//line6: create a new function called handleToggleVisibility that toggles the isVisible state variable by setting it to its opposite value (!isVisible).

//line12: connect the handleToggleVisibility function to the onClick event handler of the button. This ensures that the function is called every time the button is clicked, toggling the visibility of the text element.

//line13:  use conditional rendering to display the text element only if the isVisible state is true.