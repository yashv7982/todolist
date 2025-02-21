import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Add a new to-do item
  const addTodo = (e) => {
    e.preventDefault();
    if(newTodo.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: newTodo,
      completed: false,
      isEditing: false
    };
    setTodos([newTask, ...todos]);
    setNewTodo('');
  };

  // Toggle completed status of a to-do item
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a to-do item
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle edit mode for a to-do item
  const toggleEdit = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Update a to-do item text and exit edit mode
  const updateTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="container">
      <Header title="To-Do List Application" />
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ToDoList 
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        toggleEdit={toggleEdit}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
