import { useEffect, useState } from 'react'

import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTitle] = useState([])

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/todos/getData');
      const data = await response.json();
      setTitle(data.todos);
      console.log(data.todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    try {
      const response = await fetch('http://localhost:5000/api/todos/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, discription: title, completed: false }),
      });
      if (response.ok) {
        const newTodo = await response.json();
        setTitle((prevTodos) => [...prevTodos, newTodo.todo]);
      } else {
        console.error('Error adding todo:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

const toggleComplete = async (id,completed) => {
  try {
    const response = await fetch(`http://localhost:5000/api/todos/updateData/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !completed }),
    });
    if (response.ok) {
      setTitle((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === id ? { ...todo, completed: !completed } : todo
        )
      );
    } else {
      console.error('Error updating todo:', response.statusText);
    }
  } catch (error) {
    console.error('Error updating todo:', error);
  }
}

const deleteTodo = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/todos/deleteData/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setTitle((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    } else {
      console.error('Error deleting todo:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
}

  return (
    <>
     <div>
      <h1>MERN TODO List

      </h1>
      <TodoForm  addTodo= {addTodo}/>
      <TodoList todo={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
     </div>
    </>
  )
}

export default App
