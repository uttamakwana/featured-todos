// context provider
import TodoContextProvider from "./context/TodoContextProvider";
// components
import {
  TodoList,
  TodoInput,
  Model,
  ThemeProvider,
  BGImage,
} from "./components";
// css
import "./App.css";
// img

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
        <BGImage />
        <ThemeProvider />
      </TodoContextProvider>
      {/* Theme Changing Button */}
    </>
  );
};

export default App;
