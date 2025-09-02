import React from 'react'

const TodoItem = ({todo, deleteTodo,toggleComplete}) => {
  return (
    <div>
      <li>
        <span onClick={()=>toggleComplete(todo._id, todo.completed)} >
            {todo.title}
        </span>
        <button onClick={()=>deleteTodo(todo._id)}>
            Delete
        </button>
      </li>
    </div>
  )
}

export default TodoItem
