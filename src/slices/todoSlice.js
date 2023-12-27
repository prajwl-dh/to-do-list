import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4, v4 } from 'uuid';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: []
    },
    reducers: {
        addToDo: (state, action) => {
            state.value = [
                ...state.value,
                {id: uuidv4(), todo: action.payload, completion: false}
            ]
        },
        removeToDo: (state, action) => {
            state.value = state.value.filter((todo) => todo.id !== action.payload)
        },
        completeToDo: (state, action) => {
            state.value = state.value.map((todo) => {
                if(todo.id === action.payload){
                    todo.completion = !todo.completion
                }
                return todo
            })
        }
    }
})

export const { addToDo, removeToDo, completeToDo } = todoSlice.actions
export default todoSlice.reducer