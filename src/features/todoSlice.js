import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList:[]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodo:(state,action)=>{
            state.todoList.push(action.payload)
        }
    }
});

export const {
    setTodo
} = todoSlice.actions
export const selectTodoList = state => state.todos.todoList;
export default todoSlice.reducer