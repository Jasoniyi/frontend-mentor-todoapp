import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'


const AddForm = () => {
    const { todoList, addTodo } = useContext(GlobalContext)
    const [todo, setTodo ] = useState('')


    const handleSubmit = (e) => {
      e.preventDefault()
      addTodo(todo)
      setTodo('')
    }


  return (
    <div className="form-wrapper">
        <div className="">
            <form onSubmit={handleSubmit}>
                <input
                className='form-input'
                placeholder='Currently typing'
                type='text'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                />
            </form>
        </div>
    </div>
  )
}

export default AddForm