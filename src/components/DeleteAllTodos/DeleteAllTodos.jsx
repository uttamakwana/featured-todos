// icon
import { useContext } from "react";
import { DeleteIcon } from "../../constants/icons.js";
import { TodoContext } from "../../context/TodoContextProvider.jsx";
// css
import "./delete-all-todos.css";

const DeleteAllTodos = () => {
  const { setModel, setIsClearAllTodos } = useContext(TodoContext);

  // handle delete all todos
  function handleDeleteAllTodos() {
    setModel(true);
    setIsClearAllTodos(true);
  }
  return (
    <button
      className="delete-all-todos theme-btn"
      onClick={handleDeleteAllTodos}
    >
      <DeleteIcon />
    </button>
  );
};

export default DeleteAllTodos;
