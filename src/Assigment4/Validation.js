

const ValidationComponent = (props) => {

    let result = "Text long enough";

    if(props.length <= 5){
         result = "Text too short";
    }
    
   return(
    <div>
        {result}
    </div>

   ); 
    
} 

export default ValidationComponent;



