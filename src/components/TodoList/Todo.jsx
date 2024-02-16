/* eslint-disable react/prop-types */
// css
import "./todo.css";
// utils
import formateTime from "../../utils/formateTime.js";
// icons
import {
  EditIcon,
  DeleteIcon,
  UncheckedIcon,
  CheckedIcon,
} from "../../constants/icons.js";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/TodoContextProvider.jsx";

const Todo = ({ todo }) => {
  // getting state variables from context
  const { todos, setTodos, setTodo, setModel } = useContext(TodoContext);
  // skeletong loading state variable
  const [loading, setLoading] = useState(false);

  // formating created & updated time
  const createdAt = formateTime(todo.createdAt);
  const updatedAt = formateTime(todo.updatedAt);
  const completedAt = formateTime(todo.completedAt);

  // function: unchecked todo
  function handleUnchecked(todo) {
    const copyTodos = todos.map((oldTodo) => {
      if (oldTodo.createdAt === todo.createdAt) {
        console.log(todo);
        return {
          ...oldTodo,
          completedAt: Date.now(),
          ["completed"]: !oldTodo.completed,
        };
      } else {
        return oldTodo;
      }
    });
    console.log(copyTodos);
    setTodos(copyTodos);
    localStorage.setItem("my-todos", JSON.stringify(copyTodos));
  }
  // function: edit todo
  function handleEdit(todo) {
    setTodo(todo);
  }
  // function: delete todo
  function handleDelete(todo) {
    setModel(true);
    setTodo(todo);
  }

  // adding effect of loading image
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [todos]);

  if (loading) {
    return (
      <div className="skeleton-todo">
        <div className="skeleton-todo-text"></div>
        <div className="skeleton-todo-time"></div>
        <div className="skeleton-todo-icons"></div>
      </div>
    );
  }

  return (
    <div className={`todo ${todo.completed && "completed"}`}>
      <div className="success-overlay"></div>
      <p className="todo-text">{todo.text}</p>
      <p className="todo-time todo-time-created" title={createdAt.date}>
        Created At: {createdAt.time}
      </p>
      <p className="todo-time todo-time-created">
        {todo.updated && `Updated At: ${updatedAt.time}`}
      </p>
      <p className="todo-time todo-time-created">
        {todo.completed && `Completed At: ${completedAt.time}`}
      </p>
      <div className="todo-icon-container">
        <div
          className="checked-unchecked-icons"
          onClick={() => handleUnchecked(todo)}
        >
          {todo.completed ? (
            <CheckedIcon className="checked-icon" />
          ) : (
            <UncheckedIcon className="unchecked-icon" />
          )}
        </div>
        <EditIcon className="edit-icon" onClick={() => handleEdit(todo)} />
        <DeleteIcon
          className="delete-icon"
          onClick={() => handleDelete(todo)}
        />
      </div>
      <img src={todo.image} alt="img" className="todo-img" />
    </div>
  );
};

export default Todo;
