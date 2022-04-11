import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import TodoList from './TodoList'



const ListTodos = () => {
  const { todoList } = useContext(GlobalContext)


  return (
    <>
      { todoList.length > 0 ?
          todoList.map((todo) => (
            <TodoList key={todo.id} todo={todo} />
          )) : (
            <div className="list-content-wrapper">There are no tasks</div>
          )
      } 
    </>
  )
}

export default ListTodos