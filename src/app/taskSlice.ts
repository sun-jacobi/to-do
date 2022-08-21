import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";



export interface Task {
    name : string;
    note : string;
    key : number
}

const initialState : Task[] = [];

export const taskSlice = createSlice({
    name : 'tasklist',
    initialState,
    reducers : {
        addTask : (state, action : PayloadAction<Task>) => {
            return state.concat(action.payload);
        },
        removeTask : (state, action : PayloadAction<Task>) => {
            return state.filter(item => item.key != action.payload.key)
        },
    }
});

export const {addTask, removeTask} = taskSlice.actions;
export default taskSlice.reducer;