import React, { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState('');

  function handleTextareaChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <textarea value={text} onChange={handleTextareaChange} />
      <p>Character count: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;

//line 6: a function called handleTextareaChange that accepts an event object as its parameter. This event object contains information about the change, including the new value of the textarea. 
//line 7: function updates the text state variable with the updated value
//line 12: handleTextareaChange function as an event handler, attaching it to the onChange event of the textarea. 

//Remember: this pattern of explicitly setting the value of an input field and providing an event handler to update the state is known as a controlled component in React.

//line 13: By connecting the text state to the textarea's value and the displayed character count, React will automatically re-render the component whenever text is updated. This ensures that the character count displayed below the textarea always reflects the current length of the text.