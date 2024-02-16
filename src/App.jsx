// context provider
import {
  TodoList,
  TodoInput,
  ThemeProvider,
  BGImage,
  DeleteAllTodos,
  Model,
} from "./components";
// css
import "./App.css";
import { useContext } from "react";
import { TodoContext } from "./context/TodoContextProvider";
// img

const App = () => {
  const { model } = useContext(TodoContext);
  return (
    <>
      <h1 className="app-heading">Todo App</h1>
      {/* Todo Context Provider */}

      {/* Todo Input */}
      <TodoInput />
      {/* Todo List */}
      <TodoList />
      {/* Model for confirmation of delete */}
      <BGImage />
      <DeleteAllTodos />
      <ThemeProvider />
      {model && <Model />}
      {/* Theme Changing Button */}
    </>
  );
};

export default App;
