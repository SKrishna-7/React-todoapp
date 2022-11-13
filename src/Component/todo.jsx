import React from 'react'
const Todo = (props) => {
  return (
    <div className='list-items'>
        <li>{props.item}</li>
        <button onClick={()=>{console.log('b:'+props.id);props.DeleteItem(props.id)}}>Done</button>
    </div>
  )
}


export default Todo;