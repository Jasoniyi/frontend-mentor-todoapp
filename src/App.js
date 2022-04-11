import React, { useState, useContext } from 'react';
import dayTheme from "./images/icon-sun.svg";
import nightTheme from "./images/icon-moon.svg";
import Addform from './components/AddForm'
import ListTodos from './components/ListTodos'
import FilterTodoList from './components/FilterTodoList';
import MobileFilterList from './components/MobileFilterList';
import { GlobalProvider } from "./context/GlobalState";

import { DragDropContext } from 'react-beautiful-dnd';
import { GlobalContext } from './context/GlobalState'

import './App.css';




const App = () => {
  const { handleOnDragEnd } = useContext(GlobalContext)

  const [backgroundTheme, setBackgroundTheme ] = useState(false)
  
  const ChooseTheme = backgroundTheme ? 'light-theme' : 'dark-theme'

  const setTheme = () => {
    setBackgroundTheme(!backgroundTheme)
  }


  return (
    <GlobalProvider>
    <div className={`todo-body ${ChooseTheme}`}>
      <div className="todo-wrapper">
        <div className="todo-content">
          <h1>TODO </h1>
          <span>
            { 
              backgroundTheme ? 
                <img src={nightTheme} alt='' onClick={setTheme} />
                :
                <img src={dayTheme} alt='' onClick={setTheme}/>  
          }
            </span>
        </div>   
        <Addform />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <ListTodos />
        </DragDropContext>
        <FilterTodoList />
        <MobileFilterList />
      </div>
     
    </div>
    </GlobalProvider>
  );
}

export default App;
