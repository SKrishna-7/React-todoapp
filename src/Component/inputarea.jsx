import React from 'react'
import { useState } from 'react';

const Inputarea = (props) => {
  const [inputitems, setinputitems] = useState("");
  const handleinput=(event)=>{
    setinputitems(event.target.value);
   
  }
  
return(
  <div className='inputt'>
   <input type='text' onChange={handleinput} value={inputitems}/>
  <button 
  onClick={()=>{props.addItems(inputitems); setinputitems('')}}
  >Add</button>
  </div>
    )
}
export default Inputarea;