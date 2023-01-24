import { useState } from 'react';
import ValidationComponent from './Assigment4/Validation';
import CharComponent from './Assigment4/CharComponent';

function Assigment4() {

  const [state, updateState] = useState(
        {userInput: ""}
  );
    
  const inputChangeHandler = (event) => {
    updateState(
      { userInput: event.target.value }
    );
  }

   const deleteCharHandler = (index) => {
          const text = state.userInput.split("");// this gives us an array of characters
          text.splice(index, 1);
          const updatedText = text.join("");//this converts my array of characters into a string again
          updateState({userInput: updatedText});                                        //e bon update
          

    }
    //the split() method will split the userinput into an array of string after every character 
    const listOfChars = state.userInput.split("").map((char, index) => {
      //clicked would be executed immidetly if we had more parametra n fund psh (index, name) or smth    
      return <CharComponent clicked={() => deleteCharHandler(index)} character={char} key={index}/>

    });

  return (
    <div>
      <p>
        1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).<br></br>
        2. Create a new component (= ValidationComponent) which receives the text length as a prop<br></br>
        3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)<br></br>
        4. Create another component (= CharComponent) and style it as an inline box (= display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).<br></br>
        5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.<br></br>
        6. When you click a CharComponent, it should be removed from the entered text.<br></br>
        Hint: Keep in mind that JavaScript strings are basically arrays!
      </p>
      
      <input type="text"
        onChange={inputChangeHandler}
        value={state.userInput}
      ></input>
      
      <p>{state.userInput}</p>  

      <ValidationComponent length={state.userInput.length} />
      {listOfChars}

    </div>

  );
}

export default Assigment4;
