import React, { useState } from "react";

const Todo = () => {
  const [value, setValue] = useState();
  const [todo, setTodo] = useState([]);
  const handleClick = () => {
    if (value !== "") {
      setTodo([...todo, value]);
      setValue("")
    }
  };
  
  const removeItem =(indexToremove)=>{
    const newArray=[...todo]; 
    newArray.splice(indexToremove, 1  );
    setTodo(newArray);
  }

  return (
    <div className="parent-container">
      <div className="first-container">
        <h1>NOTE YOUR DAILY TASKS</h1>
        <input
          type="text"
          placeholder="Write your todos"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={handleClick}> Add Task </button>
      </div>
      <div className="second-container">
        <ul>
            {todo.map((todos,index)=>(
                <li key={index}>{todos} <button onClick={()=> removeItem(index)} >X</button> </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
