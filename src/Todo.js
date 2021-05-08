export const Todo = ({ todo, DeleteButton }) => {
    return (
      <div>
        <h4 className="content">{todo.content} <button onClick={() => DeleteButton(todo.id)}>Delete</button></h4>
      </div>
    );
  };
  