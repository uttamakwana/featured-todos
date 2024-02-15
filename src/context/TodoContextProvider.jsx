/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

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

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        todos,
        setTodos,
        model,
        setModel,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
