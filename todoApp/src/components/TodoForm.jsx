import React, { useState } from 'react'

const TodoForm = (addTodo) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
        addTodo(title);
        setTitle('');
    }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" value={title} placeholder='Add your todo' onChange={(e) => setTitle(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
