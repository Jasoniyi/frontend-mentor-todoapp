import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import cross from '../images/icon-cross.svg';

const TodoList = ({ todo }) => {
    const { toggleComplete, removeTodo } = useContext(GlobalContext)
  return (
    <>
        <div className="list-content-wrapper" key={todo.id}>
          <div className="list-content-wrapper-title">
            <div className={`${todo.completed ? 'checked-checkbox' : 'checkbox-wrapper'}`}>
                <input type="checkbox"
                  id='checkbox' 
                  onChange={()=>{}} 
                  name='checkbox' 
                  checked={todo.completed} 
                  onClick={() => toggleComplete(todo.id)} 
                  // className=
                  />
                <label for="my-checkbox"></label>
            </div>
              <p className={`${todo.completed ? 'completed-todo'  : ''}`}>{todo.content}</p>
          </div>
          <img src={cross} alt='' onClick={() => removeTodo(todo.id)} className="remove-todo" />
        </div>
    </>
  )
}

export default TodoList