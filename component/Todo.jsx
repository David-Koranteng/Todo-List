import React from 'react';

const Todo = ({task, toggleComplete, deletedTodo, editTodo}) => {
  return (
    <>
    <div className='Todo'>
      <p  onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
      <div>
        <button onClick={() => editTodo(task.id)}>Edit</button>
        <button onClick={() => deletedTodo(task.id)}>Delete</button>
      </div>
    </div>
    </>
  )
}

export default Todo;
