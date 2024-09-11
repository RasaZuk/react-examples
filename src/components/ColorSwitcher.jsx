import React, { useState } from 'react';

function ColorSwitcher() {
  const [bgColor, setBgColor] = useState('');

  function handleColorChange(event) {
    setBgColor(event.target.value);
  }

  return (
    <div>
      <select onChange={handleColorChange}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div style={{ backgroundColor: bgColor, width: '100px', height: '100px' }}></div>
    </div>
  );
}

export default ColorSwitcher;

//line 4: create a state variable called bgColor using the useState hook. This variable will store the current background color of the div.
//lines 6-7: function called handleColorChange updates the bgColor state variable whenever a new color is selected from the dropdown. This function takes the event object as a parameter and sets the state using the selected color value. 
//line 12: Render the dropdown with color options and attach the handleColorChange function. 
// lines 12-17: In the return statement, we render a dropdown list with color options (red, blue, green, and yellow). We attach the handleColorChange function to the dropdown's onChange event handler.
//line 19: div element and use inline styling to set its background color. The background color is determined by the current value of the bgColor state variable