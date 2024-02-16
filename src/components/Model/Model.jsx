import { useContext, useEffect } from "react";
import { TodoContext } from "../../context/TodoContextProvider";
import "./model.css";

const Model = () => {
  const {
    model,
    setModel,
    setTodo,
    todos,
    setTodos,
    todo,
    isClearAllTodos,
    setIsClearAllTodos,
    setText,
  } = useContext(TodoContext);

  console.log("model rendered!");

  const deleteAllTodos = isClearAllTodos || false;

  function handleDeleteTodo() {
    const copyTodos = todos.filter(
      (oldTodo) => oldTodo.createdAt !== todo.createdAt
    );
    setTodos(copyTodos);
    localStorage.setItem("my-todos", JSON.stringify(copyTodos));
    setModel(false);
    setTodo(null);
  }

  // deletes alll todos
  function handleDeleteAllTodos() {
    setTodos([]);
    setModel(false);
    setTodo(null);
    setIsClearAllTodos(false);
    localStorage.setItem("my-todos", null);
  }

  // cancel the delete all todos request
  function cancleDeleteAllTodos() {
    setModel(false);
    setIsClearAllTodos(false);
    setTodo(null);
  }

  // cancel the delete todo request
  function cancleDeleteTodo() {
    setModel(false);
    setTodo(null);
  }

  // clearing the text
  useEffect(() => {
    // clearing  the input text
    setText("");
  });
  if (model)
    return (
      <div className="overlay">
        <div className="popup readable-container">
          <div className="popup-text">
            {deleteAllTodos
              ? "Are you want to delete all todos?"
              : `Are you sure wanted to delete todo(${todo.text})?`}
          </div>
          <div className="popup-btns">
            <button
              className="popup-btn confirm-btn"
              onClick={() =>
                deleteAllTodos ? handleDeleteAllTodos() : handleDeleteTodo()
              }
            >
              Confirm
            </button>
            <button
              className="popup-btn cancel-btn"
              onClick={() =>
                deleteAllTodos ? cancleDeleteAllTodos() : cancleDeleteTodo()
              }
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
};

export default Model;
