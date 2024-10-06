import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      name: "Go to the Grocery Store",
      done: false,
    },
    {
      id: uuidv4(),
      name: "Exercise for 30 Minutes",
      done: false,
    },
    {
      id: uuidv4(),
      name: "Read for 20 Minutes",
      done: true,
    },
    {
      id: uuidv4(),
      name: "Water the Plants:",
      done: true,
    },
  ],
};

export const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const newTask = {
        id: uuidv4(),
        name: action.payload,
        done: false,
      };
      state.tasks = [...state.tasks, newTask];
    },
    toggleTasks(state, action) {
      const selectedTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (selectedTask) selectedTask.done = !selectedTask.done;
    },
    deleteTasks(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTasks, deleteTasks } = TasksSlice.actions;
export default TasksSlice.reducer;

// https://dev.to/promathieuthiry/mastering-redux-toolkit-in-your-react-projects-51mk
