import { useContext } from "react";
import { TodoContext } from "../../context/TodoContextProvider";
import "./model.css";

const Model = () => {
  const { model, setModel, setTodo, todos, setTodos, todo } =
    useContext(TodoContext);

  function handleDeleteTodo() {
    const copyTodos = todos.filter(
      (oldTodo) => oldTodo.createdAt !== todo.createdAt
    );
    setTodos(copyTodos);
    localStorage.setItem("my-todos", JSON.stringify(copyTodos));
    setModel(false);
    setTodo(false);
  }

  if (model)
    return (
      <div className="overlay">
        <div className="popup readable-container">
          <div className="popup-text">Are you sure wanted to delete todo?</div>
          <div className="popup-btns">
            <button
              className="popup-btn confirm-btn"
              onClick={handleDeleteTodo}
            >
              Confirm
            </button>
            <button
              className="popup-btn cancel-btn"
              onClick={() => setModel(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
};

export default Model;
