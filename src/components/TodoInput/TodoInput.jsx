// useContext & useState
import { useContext, useEffect, useState } from "react";
// css
import "./todo-input.css";
// context of todo
import { TodoContext } from "../../context/TodoContextProvider";
// edit todo, submit todo
import { addTodo, editTodo } from "./utils";

const TodoInput = () => {
  // state variables from context
  const { todo, setTodo, todos, setTodos } = useContext(TodoContext);
  const [text, setText] = useState("");

  //function: handle todo form submit
  function handleSubmit(e) {
    // preventing default behavior
    e.preventDefault();
    // input element
    const input = e.target[0];
    if (!todo.text) {
      // add todo
      addTodo(text, todos, setTodos);
    } else {
      // edit todo
      editTodo(text, todo, setTodo, todos, setTodos);
    }
    // set text state to empty
    setText("");
    // focus on input
    input.focus();
  }

  // setting text value to edited text todo value
  useEffect(() => {
    if (todo.text) {
      setText(todo.text);
      document.querySelector("#todo-input").focus();
    }
  }, [todo]);
  // component starts here
  return (
    <>
      <form
        className="readable-container input-container"
        onSubmit={handleSubmit}
        method="post"
      >
        <input
          type="text"
          placeholder="Todo text goes here..."
          value={text}
          id="todo-input"
          onInput={(e) => setText(e.target.value)}
        />
        <button
          className={`todo-add-btn ${todo.text && "edit-btn"}`}
          disabled={text ? false : true}
        >
          {todo.text ? "Edit" : "Add"}
        </button>
      </form>
    </>
  );
};

export default TodoInput;
