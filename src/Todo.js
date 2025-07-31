import React from 'react';

const Todo = ({ todoList, onDelete }) => {
  return (
    <ul className="todo-list">
      {todoList.map((item) => (
        <li key={item.id} className="todo-item">
          <span>{item.text}</span>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
