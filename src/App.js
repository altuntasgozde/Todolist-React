import "./App.css";
import React, { useState, useEffect } from "react";
import { Todos } from "./Todos";
import { FormInput } from "./FormInput";

function App() {
  const [change, setChange] = useState("");

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [check, setCheck] = useState(false)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setCheck(false)
  }, [todos,check]);

  const ChangeValue = (e) => {
    setChange(e.target.value);
  };

  const AddTodo = (e) => {
    const TodoId = Math.floor(Math.random() * 10000) + 1;

    const newTodo = { content: change, id: TodoId, status:false};

    setTodos((oldTodos) => [...oldTodos, newTodo]);

    e.preventDefault();
  };

  const DeleteButton = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
    localStorage.removeItem(todos.filter((item) => item.id !== id));
  };

  const DeleteAll = () => {
    setTodos([]);
    localStorage.removeItem("todoInLocalStorage");
  };


  const CheckTodo = (id) => {

    let item = todos.map(item => item);

    let filteredItem = item.filter(item => item.id == id);
   
    if(filteredItem[0].id == id) {
      filteredItem[0].status = !filteredItem[0].status;
      setCheck(true)
    }
  };


  return (
    <div className="App">
      <div className="frame">
        <h1>To Do List</h1>
        <FormInput ChangeValue={ChangeValue} AddTodo={AddTodo} />
        <div className="card-2">
          <h2>
            <u>To Do's</u>
          </h2>
          <div className="todos">
            <Todos CheckTodo={CheckTodo} todos={todos} DeleteButton={DeleteButton} />
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
