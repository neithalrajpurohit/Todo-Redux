import React from 'react';
import Input from './components/Input';
import './App.css';
import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'
import TodoItem from './components/TodoItem';
function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="app">
      <div className="app-container">
      <div className="app-todoContainer">
        {todoList.map(item=>(
          <TodoItem
          name={item.item}
          done = {item.done}
          id = {item.id}
          />
          ))
          }
      </div>

      <Input/>
      </div>
    </div>
  );
}

export default App;
