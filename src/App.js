import React, { useState } from 'react';
import Todo from './Todo';
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      const newTodo = { id: Date.now(), text: task };
      setTodoList([...todoList, newTodo]);
      setTask('');
    }
  };

  const handleDeleteTodo = (idToRemove) => {
    const updatedList = todoList.filter(todo => todo.id !== idToRemove);
    setTodoList(updatedList);
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTodo} disabled={task.trim() === ''}>
            Add Todo
        </button>
      </div>
      <Todo todoList={todoList} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
