import React from "react";
import { Todo } from "./Todo";

export const Todos = ({todos, DeleteButton, CheckTodo}) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          CheckTodo={CheckTodo}
          todo={todo}
          key={todo.id}
          id={todo.id}
          DeleteButton={DeleteButton}
        />
      ))}
    </div>
  );
};
