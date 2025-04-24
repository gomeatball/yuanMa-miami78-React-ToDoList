import React, { useState } from "react";


const TodoHeader = ({todos, setTodos}) =>{

 const [newTodo, setNewTodo] = useState("");
 const [counter, setCounter] = useState(0);
const validateInput = () =>{
    if (!newTodo || newTodo === "" || newTodo=== undefined) {
        alert('Please add a task!')
    }
    else {
         addTask()
    }
}


const addTask = () => {
    let newTodoObj = {
        id: counter,
        todo: newTodo

    }
    const appendedArray = [...todos, newTodoObj]
    setTodos(appendedArray)

    setCounter(counter + 1);
    setNewTodo("");
    console.log("current list of todos:" , todos);
    
}

    return (
        <>
      <input 
         type="text" 
         value={newTodo} 
         className="new-todo"
         placeholder="What needs to be done?"
         onChange={event => setNewTodo(event.target.value)}></input>
      <button 
          className="add-tast"
          onClick={validateInput}
      >Add Task
      </button>
      <ul>
         {todos.map((e,counter)=>(<li key={counter}>{e.todo}</li>))}
      </ul>
      
        </>
    )
}

export default TodoHeader;