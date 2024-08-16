import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function TodoList() {
  const todos = [
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Clean the house" },
    { id: 3, text: "Go for a run" },
    { id: 4, text: "Finish homework" },
    { id: 5, text: "Call mom" },
    { id: 6, text: "Buy groceries" },
    { id: 7, text: "Walk the dog" },
  ];
  return (
    <ul>
      {todos.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
}

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
