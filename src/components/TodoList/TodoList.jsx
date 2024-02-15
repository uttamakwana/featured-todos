// useContext
import { useContext } from "react";
// context todo
import { TodoContext } from "../../context/TodoContextProvider";
// css
import "./todo-list.css";
// component
import Todo from "../TodoList/Todo.jsx";

const TodoList = () => {
  // getting todos from context
  const { todos } = useContext(TodoContext);
  // if there are not todos!
  if (todos.length === 0)
    return <p className="readable-container no-todos-text">No todos yet!</p>;

  // components starts here
  return (
    <div className="container">
      <div className="todo-grid">
        {todos.map((todo) => (
          <Todo key={todo.createdAt} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
