import CharacterCounter from "./components/CharacterCounter.jsx";
import ControlledInput from "./components/ControlledInput.jsx";
import Counter from "./components/Counter.jsx";
import ToggleVisibility from "./components/ToggleVisibility.jsx";
import TodoList from "./components/ToDoList.jsx";
import ColorSwitcher from "./components/ColorSwitcher.jsx";


function App() {
  

  return (
    <>
      <div>
      <h1>REACT PAVYZDŽIAI</h1>
    </div>
    <div>
      <h2>Counter</h2>
      <h3>You are tasked with creating a simple counter component that increments a number every time a button is clicked.
      </h3>
      <h3>Expectations:</h3>
      <p>Every time the button is clicked, the number should increment by 1</p>
      <p>Display the current number state in the text element</p>
    </div>
    <div className="container">
      <Counter/>
    </div>
   
   <div>
    <h2>Controlled Input Field</h2>
    <h3>
      Create an input field component that allows a user to type in text and displays the text in real-time.
    </h3>
    <p>Every time the user types something in the input field, the text should update in the text element</p>
    <p>You should use the useState hook to keep track of the text state</p>
   </div>
   <div className="container">
    <ControlledInput />
   </div>

   <div>
    <h2>Toggle Visibility</h2>
    <h3>You are tasked with creating a component that toggles the visibility of a piece of text when a button is clicked</h3>
    <p>Initially, the text should be hidden</p>
    <p>When the button is clicked, the text should become visible if it was hidden, and hidden if it was visible</p>
    <p>Use the useState hook to manage the visibility state</p>
   </div>
   <div className="container">
    <ToggleVisibility/>
   </div>

   <div>
    <h2>Character counter</h2>
    <h3>A simple Character Counter component that allows users to type in text and displays the number of characters in real-time.</h3>
    <p>Create a textarea element for users to type in text</p>
    <p>Display the character count below the textarea in real-time</p>
    <p>Use the useState hook to manage the text state</p>
   </div>
   <div className="container">
    <CharacterCounter/>
   </div>

   <div>
    <h2>To Do List</h2>
    <h3>creating a simple Todo List component that allows users to add new items to the list and delete items once they are completed</h3>
    <p>An input field for adding new todo items</p>
    <p>A button to submit the new todo item</p>
    <p>Display the list of todo items</p>
    <p>A delete button next to each todo item to remove it from the list</p>
   </div>
   <div className="container">
    <TodoList/>
   </div>

   <div>
    <h2>Color switcher</h2>
    <h3>create a simple Color Switcher component that allows users to change the background color of a div by selecting a color from a dropdown list.</h3>
    <p>Create a dropdown list with a few color options (e.g., red, blue, green, yellow)</p>
    <p>When a color is selected from the dropdown, the background color of the div should change to the selected color</p>
    </div>
    <div className="container">
      <ColorSwitcher/>
    </div>
   
    

    
    </>
  )
}

export default App
