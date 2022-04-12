import React, { createContext, useState, useEffect } from 'react';


const initialState = {
    todos:  [
        { id: 1, content: "Complete online JavsScript course", completed: true },
        { id: 2, content: "Jog around the park 3x", completed: false },
        { id: 3, content: "10 minutes meditation", completed: false },
        { id: 4, content: "Read for 1 hour", completed: false },
        { id: 5, content: "Pick up groceries", completed: true },
        { id: 6, content: "Complete Todo App on Frontend Mentor", completed: false }
      ]
  }

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
      const [todoList, setTodoList] = useState(initialState.todos)
      


    useEffect(() => {
        console.log('list', todoList )
      }, [todoList])

      const addTodo = (todo) => {
        setTodoList([ ...todoList, {  id: todoList.length + 1, content: todo, completed: false}])
      }

      const removeTodo = (id) => {
        const updatedTodo = todoList.filter((todo) => todo.id !== id)
        setTodoList(updatedTodo)
      }
      
      const toggleComplete = (todoId) => {
          const updatedTodo = todoList.map((todo) => (
            todo.id === todoId ? { ...todo, completed: !todo.completed} : todo
          ))
          setTodoList(updatedTodo)
          
        console.log(todoId)
      }

      const clearCompleted = () => {
        const updatedTodo = todoList.filter((todo) => !todo.completed )
        setTodoList(updatedTodo)
      }

      const completed = () => {
        const updatedTodo = todoList.filter((todo) => todo.completed )
        setTodoList(updatedTodo)
      }

      const active = () => {
        const updatedTodo = todoList.map((todo) => (
          {...todo, completed: false}
        ) )
        setTodoList(updatedTodo)
      }

     
      


    return(
       <GlobalContext.Provider
        value = {{
            todoList,
            toggleComplete,
            addTodo,
            removeTodo,
            clearCompleted,
            completed,
            active,
        }}>
         {children}
     </GlobalContext.Provider>  
    ) 
}