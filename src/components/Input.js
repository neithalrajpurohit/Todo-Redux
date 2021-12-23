import React from 'react';
import { useState } from 'react';
import  {useDispatch}  from 'react-redux';
import { setTodo } from '../features/todoSlice';
import './Input.css'
const Input = () => {
    const[input,setInput]=useState('');
    const dispatch = useDispatch();
    const addTodo=()=>{

        dispatch(setTodo({
            item:input,
            done:false,
            id:Date.now()
        }))
    }
    return (
        <div className="input">
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
            <button onClick={addTodo}>Add!</button>
        </div>
    )
}

export default Input
