import React, { useContext } from 'react'
import  { GlobalContext } from '../context/GlobalState'

const FilterTodoList = () => {
    const { todoList, clearCompleted, completed, allTodos, active } = useContext(GlobalContext)
  return (
    <div className="filter-wrapper">
        <div>{ todoList.length } Items Left</div>
        <div className="filter-center-wrapper">
            <div className="desktop-all" onClick={allTodos}>All</div>
            <div className="desktop-active" onClick={active}>Active</div>
            <div className="desktop-complete" onClick={completed}>Completed</div>
        </div>
        <div onClick={clearCompleted}>Clear Completed</div>
    </div>
  )
}

export default FilterTodoList