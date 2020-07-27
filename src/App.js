import React, { useEffect, useState } from "react";
import { getTodos } from "./services/todos.service";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos()
      .then((res) => {
        const { data: todos } = res;
        setTodos(todos);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <ul>
        {todos.map((todo) => (
          <li>{todo.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
