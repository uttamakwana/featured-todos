// context provider
import TodoContextProvider from "./context/TodoContextProvider";
// components
import { TodoList, TodoInput, Model, ThemeProvider } from "./components";
// css
import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="app-heading">Todo App</h1>
      {/* Todo Context Provider */}
      <TodoContextProvider>
        {/* Todo Input */}
        <TodoInput />
        {/* Todo List */}
        <TodoList />
        {/* Model for confirmation of delete */}
        <Model />
      </TodoContextProvider>
      {/* Theme Changing Button */}
      <ThemeProvider />
    </>
  );
};

export default App;
