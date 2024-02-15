// add todo
export function addTodo(text, todos, setTodos) {
  // fetching random image
  const randomImageId = Math.floor(Math.random() * 50) + 1;
  // creating this todo to add into the todo list
  const todo = {
    text: text,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    completed: false,
    updated: false,
    completedAt: null,
    image: `https://picsum.photos/id/${randomImageId}/200/300`,
  };
  const copiesOfTodos = [...todos, todo];
  setTodos(copiesOfTodos);
  localStorage.setItem("my-todos", JSON.stringify(copiesOfTodos));
}

// delete todo
export function editTodo(text, todo, setTodo, todos, setTodos) {
  const copyTodos = todos.map((oldTodo) => {
    if (oldTodo.createdAt === todo.createdAt) {
      return {
        ...oldTodo,
        text: text,
        updated: true,
        updatedAt: Date.now(),
      };
    } else {
      return oldTodo;
    }
  });
  setTodos(copyTodos);
  setTodo(false);
  localStorage.setItem("my-todos", JSON.stringify(copyTodos));
}
