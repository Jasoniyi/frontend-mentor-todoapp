import React, { useContext } from 'react'
import  { GlobalContext } from '../context/GlobalState'

const MobileFilterList = () => {
    const { completed, allTodos, active } = useContext(GlobalContext)
  return (
    <div className="mobile-filter-wrapper">
            <div className='mobile-all' onClick={allTodos}>All</div>
            <div className='mobile-active' onClick={active}>Active</div>
            <div className='mobile-completed' onClick={completed}>Completed</div>
    </div>
  )
}

export default MobileFilterList