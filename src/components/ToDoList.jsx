import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, toggleComplete, deleteTodo, toggleEdit, updateTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <ToDoItem 
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          toggleEdit={toggleEdit}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default ToDoList;
