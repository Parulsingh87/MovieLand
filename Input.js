import React, {useRef, useState} from 'react';

const Input = () => {

    const [state, setState] = useState("Hey there")
    
    const changeRef = useRef(null)
    const onClick = (e) => {
         setState(changeRef.current.value)
        changeRef.current.value = ""
    }
    

  return (
    <div className='center'>
        <hr/>
        <p>{state}</p>
        <input type='text' placeholder='enter something' ref={changeRef}/>
        <button onClick={onClick}>change me</button>
    
      
    </div>
  );
}

export default Input;
