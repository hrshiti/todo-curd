import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todo, deleteTodo, toggleComplete}) => {
  return (
    <div>
      <ul>
        {todo.length === 0 ? (
          <p>No todos available</p>
        ) : (
            todo.map((todos)=>(
                <TodoItem key={todo._id} todo={todo} toggleComplete={toggleComplete}
                deleteTodo={deleteTodo} />
            ))
         )}
      </ul>
    </div>
  )
}

export default TodoList
