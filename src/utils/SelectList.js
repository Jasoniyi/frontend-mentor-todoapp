import React, { useState, useContext, useEffect } from 'react'
import check from '../images/icon-check.svg'
import { GlobalContext } from '../context/GlobalState'

const SelectList = ({ id }) => {
     const { toggleComplete, select } = useContext(GlobalContext)
    // const [set, setSet] = useState(todos)
    // const [select, setSelect ] = useState(false);
    // const [underline, setUnderline ] = useState()

    // useEffect(() => {
    //     todos.filter((todo) => console.log(!todo.completed))
    //   }, [todos])

  //   const toggleComplete = (todoId) => {
  //     const updatedTodo = set.map((todo) => (
  //       todo.id === todoId ? { ...todo, completed: !todo.completed} : todo
  //     ))
  //     console.log('set', set)
  //     console.log('check', updatedTodo)
  //     setSet(updatedTodo)
  //     setSelect(!select)
  //     setUnderline(!underline)
  // }
    
    // const handleSelect = () => {
    //     setSelect(!select)
    //     console.log('select', )
    // }

    // useEffect(() => {
    //   console.log('id', id)
    // }, [])

  return (
    <>
        <div className="checkbox-wrapper" onClick={() => toggleComplete(id)}>
            {
                select ? <div className="checkbox-select-wrapper">
                <span className="check">
                 <img src={check} alt='' className="test" />
             </span> 
            </div> : (
                <div className='checkbox-deselect' />
            )
            }          
        </div>
    </>
  )
}

export default SelectList