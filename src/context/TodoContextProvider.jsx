/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
// light image
import { darkImage, lightImage } from "../constants/images.js";
export const TodoContext = createContext(null);

const TodoContextProvider = ({ children }) => {
  // fetching todos stored in local storage
  const todosFromLocalStorage =
    JSON.parse(localStorage.getItem("my-todos")) || [];
  // selecting a particular todo to edit and delete
  const [todo, setTodo] = useState({});
  // list of todo
  const [todos, setTodos] = useState(todosFromLocalStorage);
  // to open and close model to delete the todo
  const [model, setModel] = useState(false);
  // bg image path
  const [bgPath, setBgPath] = useState(() => {
    const mode = JSON.parse(localStorage.getItem("data-theme"));
    if (mode === "dark") {
      return darkImage;
    } else {
      return lightImage;
    }
  });
  // clear all todos
  const [isClearAllTodos, setIsClearAllTodos] = useState(false);
  // todo input value
  const [text, setText] = useState("");
  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        todos,
        setTodos,
        model,
        setModel,
        bgPath,
        setBgPath,
        isClearAllTodos,
        setIsClearAllTodos,
        text,
        setText,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
