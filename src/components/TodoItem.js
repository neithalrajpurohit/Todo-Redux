import { Checkbox } from '@material-ui/core'
import React from 'react'
import './TodoItem.css'
import  {Checkbox}  from '@material-ui/core'

const TodoItem = (name,done,id) => {
    const checkHandler=()=>{

    }
    return (
        <div className="todoItem">
            <Checkbox checked={done}
            color="primary"
            onChange={checkHandler} 
            inpputProps={{'aria-label':'secondary checkbox'}}/>
             <p className={done && "todoItem--done"}>{name}</p>   
            
        </div>
    )
}

export default TodoItem
