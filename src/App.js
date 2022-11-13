import { useState } from 'react';
import './App.css';
import Inputarea from './Component/inputarea';
import Todo from './Component/todo';

function App() {
    const [items, setitems] = useState([]);
  const addItems=(inputitems)=>{
      setitems((preItems)=>{
        return[...preItems,inputitems]
      })
      
  }
  console.log(items);

  // const DeleteItem=(id)=>{
  //     setitems((preItems)=>{
  //       return preItems.filter((item,index)=>{
  //         return index!==id;
  //       })
  //     })
  // }
  const DeleteItem=(id)=>{
    setitems((preItems)=>{
      return preItems.filter((item,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div className='container'>
    <div className='heading'>
      <h1>ToDo List</h1>
    </div>
    
    <Inputarea addItems={addItems} />
    <div>
    <ol className='lists'>
    
   
    {
      items.map((item,i)=>{
        return(
        <Todo item={item} key={i} DeleteItem={DeleteItem} id={i}/>
        )
  })
    }
  
    
    </ol>
    </div>

    </div>
    
  );
}

export default App;
