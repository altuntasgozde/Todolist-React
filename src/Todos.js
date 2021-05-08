import React from "react";
import { Todo } from "./Todo";

export const Todos = ({ todos, DeleteButton }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          id={todo.id}
          DeleteButton={DeleteButton}
        />
      ))}
    </div>
  );
};
