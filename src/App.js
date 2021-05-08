import "./App.css";
import React, { useState, useEffect } from "react";
import { Todos } from './Todos'
import { FormInput } from "./FormInput";



function App() {

  const [change, setChange] = useState("");

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  });

  const ChangeValue = (e) => {
    setChange(e.target.value);
  };

  const AddTodo = (e) => {

    const TodoId = Math.floor(Math.random() * 10000) + 1

    const newTodo = { content: change, id: TodoId }

    setTodos((oldTodos) => [...oldTodos, newTodo]);

    e.preventDefault()
  };

  const DeleteButton = (id) => {
    setTodos(todos.filter((item)=> item.id !== id));
  };

  const DeleteAll = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <div className="frame">
        <h1>To Do List</h1>
        <FormInput ChangeValue={ChangeValue} AddTodo={AddTodo}/>
        <div className="card-2">
          <h2><u>To Do's</u></h2>
          <div className="todos">
             <Todos todos={todos} DeleteButton={DeleteButton}/>
          </div>
        </div>
        <button onClick={DeleteAll} className="ClearTodo">
          Clear All To Do
        </button>
      </div>
    </div>
  );
}

export default App;
