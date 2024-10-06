import { configureStore } from "@reduxjs/toolkit";
import TasksSlice from "../tasks/taskSlice";

export const store = configureStore({
    reducer: {
        list: TasksSlice
    }
})

export default store;