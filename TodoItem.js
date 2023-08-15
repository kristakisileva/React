import React from 'react';

function TodoItem({ todo, onToggleTodo, onDeleteTodo, onImportantTodo}) {
  const { id, task, completed, importance} = todo;

  return (
    <li style={{background: importance ? `blue` : `white`}}
    className="list-group-item d-flex align-items-center justify-content-between">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleTodo(id)}
        className="mr-2"
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {task}
      </span>
      <button onClick={() => onDeleteTodo(id)} className="btn btn-danger btn-sm ml-auto">Delete</button>
      <button onClick={() => onImportantTodo(id)} className="btn btn-danger btn-sm ml-auto">Important</button>
    </li>
  );
}

export default TodoItem;
