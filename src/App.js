import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import { useState } from 'react';


function App() {

  //useState return two elements and always two elements
  //The other state in this case -> setOtherState will always be a function 
  //that allows us to update this state -> userstate
  const [userState, setOtherState] = useState({ 
        name: "Fresk",
      
  });  
  
  const switchNameHandler = (newName) => {
    setOtherState({
        name: newName,
      
  });
  }

 const nameChangeHandler = (event) => {
    setOtherState({
        name: event.target.value
  });
  }

  return (
    <div className="App">
      <ol>
        <li>Create TWO new components: UserInput and UserOutput</li>
        <li>UserInput should hold an input element, UserOutput two paragraphs</li>
        <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
        <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
        <li>Add state to the App component ( the username) and pass the username to the UserOutput component</li>
        <li>Add a method to manipulate the state ( an event-handler method)</li>
        <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
        <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
        <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
        <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        <button onClick={() => switchNameHandler("Freskim")}>Press</button>
        <UserInput name={userState.name} changed = {nameChangeHandler}/>
        <UserOutput name={userState.name} />
        <UserOutput name={userState.name} click = {switchNameHandler.bind(this, "Fresk")}/>
      </ol>
    </div>
    //<UserOutput name="ZenoSama" />

    //Qeto dyja e bojn punen e njejt
    //() => switchNameHandler("ZenoSama")
    //switchNameHandler.bind(this, "Fresk") --Maybe this method is for better use--
  );
}

export default App;
