import './UserOutput.css';

const userOutput = (props) => {
            //onClick ne momentin qe e klikojm qet paragraf e merr vleren qadush qe e kem n click 
            //ne kete rast funksionin per me ndryshu paragrafin 
    return (
        <div className='UserOutput'>
            <p onClick={props.click}>Username: {props.name}</p> 
            <p>This will be overwritten</p>        
        </div>
    );
} 

export default userOutput;