import React, { useState } from 'react'
import Todo from './Todo';
import {v4 as uuidv4} from 'uuid';
import Todoform from './todoform';
import EditTodo from './EditTodo';
uuidv4();

const TodoWrap = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id:uuidv4(), task: todo, completed: false, isEditing: false}])
    }

    const toggleComplete = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deletedTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
      setTodos(todos.map(todo => todo.id === id ? {
     ...todo, isEditing: !todo.isEditing} : todo
      ))
    }
    const editTask = (task, id) => {
      setTodos(todos.map(todo => todo.id === id ? {
        ...todo, task, isEditing: !todo.isEditing} : todo))
 
    }


  return (
    <>
    <div className='Todowrap'>
        <h1>TODO LIST</h1>
        <Todoform addTodo={addTodo} />
        {todos.map((todo, index) => (

          todo.isEditing ? (
            <EditTodo editTodo={editTask} task={todo}/> 
          ) : (
            <Todo task={todo} key={index} toggleComplete={toggleComplete}
            deletedTodo= {deletedTodo}  editTodo={editTodo}/>
          )            
        ))}
    </div>
    </>
  )
}

export default TodoWrap;
