import React, { useState, useContext, useEffect } from 'react'
import check from '../images/icon-check.svg'
import SelectList from '../utils/SelectList'
import { GlobalContext } from '../context/GlobalState'


const AddForm = () => {
    const {todoList, addTodo } = useContext(GlobalContext)
    const [todo, setTodo ] = useState('')

    useEffect(() => {
      console.log('list', todoList)
    }, [])

    const handleSubmit = (e) => {
      e.preventDefault()
      addTodo(todo)
      setTodo('')
      console.log('add', todoList)
    }


  return (
    <div className="form-wrapper">
        <SelectList />
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