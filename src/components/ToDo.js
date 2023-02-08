import React, { useState } from 'react'
import './ToDo.css'

const ToDo = () => {
  // creating useState
  var [userInput,setuserInput] = useState("");
  var [todoData,settodoData] = useState([]);

  // button  to add and store new todo items
  const addButton =()=> {
    todoData.push(userInput);
    settodoData(todoData);
    setuserInput("");
    
    // (another method to store using spread operator )
    // settodoData([...todoData,userInput]);
    // setuserInput("");
  }
  //  to take values from input field whenever value entered
  const handleChange=(e)=>{
    setuserInput(e.target.value);

  }
  // list the todo items by clicking enter , instead of add button
  const handleKeyPress =(event)=>{
    if(event.keyCode === 13){
      addButton();
    }
    
  }
  return (
    <div className='todo_container'>
       
        <h2>TODO-APP</h2>
        <input type='text' value={userInput} onChange={handleChange} onKeyUp={handleKeyPress} placeholder='Enter the Items'></input>
        <button onClick={addButton}>ADD</button>
        <div>
        <ul>
          {/* display the list of todo items we entered */}
            {todoData.map((item,index) =>(
              <li key={index}>{item}</li>
            ))}
            
        </ul>
        </div>
    </div>
  )
}

export default ToDo;