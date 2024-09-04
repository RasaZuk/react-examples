import ControlledInput from "./components/controlledInput/ControlledInput"
import Counter from "./components/counter/Counter"
import ToggleVisibility from "./components/toggleVisibility/ToggleVisibility"


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
    
    </>
  )
}

export default App
