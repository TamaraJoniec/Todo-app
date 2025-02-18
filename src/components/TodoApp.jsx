import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

export default function TodoApp() {
  const [text, setText] = useState("");
  const { todo, addTodo, removeTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todo.map((todo, index) => (
          <li key={index}>
            {todo.text} <button onClick={() => removeTodo(todo.index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
