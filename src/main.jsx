import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// styles
import "./styles/index.css";
import "./styles/color.css";
import TodoContextProvider from "./context/TodoContextProvider.jsx";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
