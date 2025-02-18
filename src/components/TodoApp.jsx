import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
import "../styles/todo.css";

export default function TodoApp() {
  const [text, setText] = useState("");
  const { todo, addTodos, removeTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(text);
    setText("");
  };

  return (
    <div className="todo-container">
      <h1 className="title">Todo App</h1>
      <form onSubmit={handleSubmit} className="todo-form">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="todo-input" />
        <button type="submit" className="add-btn">
          Add Todo
        </button>
      </form>
      <ul className="todo-list">
        {todo.map((todo, id) => (
          <li key={id} className="todo-item">
            {todo.text}{" "}
            <button onClick={() => removeTodo(todo.id)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
