import React from 'react';

const Todo = ({ todoList, onDelete }) => {
  return (
    <ul className="todo-list">
      {todoList.map((item, index) => (
        <li key={index} className="todo-item">
          <span>{item}</span>
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
