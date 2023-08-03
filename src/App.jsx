import React, { useState } from 'react';
import './App.css'; 
export default function App() {
  const [todos, setTodos] = useState('');
  const [todoslist, setTodoslist] = useState([]);

  const addTodo = () => {
    setTodoslist([...todoslist, todos]);
    setTodos('');
  };

  const removeTodo = (todoIndex) => {
    setTodoslist((prevTodos) => prevTodos.filter((_, index) => index !== todoIndex));
  };

  return (
    <div className="App">
      <h1>Todo list</h1>
      <input
        value={todos}
        onChange={(e) => setTodos(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      {todoslist.map((todo, index) => (
        <div key={index} className="task-box">
          <span>{todo}</span>
          <button className="remove-button" onClick={() => removeTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
