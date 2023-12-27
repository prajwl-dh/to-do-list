import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4, v4 } from 'uuid';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: [
            {id: 'cb2039b4-1b5a-4297-b146-aca0695c7899', todo: 'Hello there, welcome to my to-do list app!', completion: false},
            {id: 'cb2039b4-1b5a-4297-b146-aca06sdauh99', todo: 'This is what a completed task looks like', completion: true},
            {id: 'cb2039b4-1b5a-4397-b146-acdagsdavh99', todo: 'You can click or tap on the trash icon to delete me', completion: false},
        ]
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