import React, {useState} from 'react';
import '../App.css';

const Button = () => {

    let [show, setShow] = useState(true);

    let message = (e) =>{
        setShow(!show);
        // console.log("all done")
        
    }
  return (

    <div className='center'>
      <button onClick={message}>Click me</button>
      {show && <p>Here I am!</p>}
    </div>
  );
}

export default Button;
