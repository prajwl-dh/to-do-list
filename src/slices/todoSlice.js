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
        }
    }
})

export const { addToDo } = todoSlice.actions
export default todoSlice.reducer