export const Todo = ({ todo, DeleteButton,CheckTodo}) => {

  return (
    <div className="todo">
      <input onChange={() => CheckTodo(todo.id)}  type="checkbox" />
      <h4 className={todo.status ? "content done" : "content"}>{todo.content}</h4>
      <div className="deletePart">
        <button className="deleteButton" onClick={() => DeleteButton(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
