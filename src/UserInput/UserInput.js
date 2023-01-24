const userInput = (props) => {
    //These are inLine Styles being used
    const styleInput = {
        color: "red",
        border: '2px solid blue',
        width: '25%'
    }

    //onChange will turn on whenever value in this input changes 
     return  <input className="input" style={styleInput}  type = "text" onChange = {props.changed} value={props.name} />;
}
export default userInput;