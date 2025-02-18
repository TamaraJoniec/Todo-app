import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todo, setTodo] = useState([]);

  //Function to add a new to do
  const addTodos = (text) => {
    setTodo((prevTodos) => [...prevTodos, { id: Date.now(), text }]);
  };

  //Function to delete a to do
  const removeTodo = (id) => {
    setTodo((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return <TodoContext.Provider value={{ todo, addTodos, removeTodo }}>{children}</TodoContext.Provider>;
}

export function useTodo() {
  return useContext(TodoContext);
}
