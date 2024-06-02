import React, { useState } from 'react';

const ToDoList = () => {
  // State for managing the input value
  const [inputValue, setInputValue] = useState('');

  // State for managing the list of todos
  const [todos, setTodos] = useState([]);

  // Handle input changes
  const handleChanges = (e) => {
    setInputValue(e.target.value);
  };

  // Add new todo to the list
  const addToTheList = () => {
    if (inputValue.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, inputValue]);
      setInputValue('');
    }
  };

  // Delete a todo from the list
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input
        value={inputValue}
        onChange={handleChanges}
        placeholder='Add some stuff to the list'
      />
      <button onClick={addToTheList}>Add to the list</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodo(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
