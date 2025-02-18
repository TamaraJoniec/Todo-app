import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todo, setTodo] = useState([]);

  //Function to add a new to do
  const addTodo = (text) => {
    setTodo([...todo, { text }]);
  };

  //Function to delete a to do
  const removeTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return <TodoContext.Provider value={{ todo, addTodo, removeTodo }}>{children}</TodoContext.Provider>;
}

export function useTodo() {
  return useContext(TodoContext);
}
