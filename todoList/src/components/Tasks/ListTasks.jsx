import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../tasks/taskSlice";
import store from "../../store/store";
import TaskItem from "./TaskItem";
import FooterTasks from "./FooterTask";

const ListTasks = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.list.tasks);
  console.log("...", tasks);
  const handleSubmit = (e) => {
    console.log("calling?");
    e.preventDefault();
    dispatch(addTask(newTask));
    setNewTask("");
  };

  return (
    <div className="task_wrapper">
      <div className="task_container">
        <form onSubmit={handleSubmit} className="task_form">
          <input
            type="input"
            value={newTask}
            onChange={(event) => setNewTask(event?.target.value)}
            className="form__field"
            placeholder="Add a task"
            name="name"
            id="name"
            required
          />
          <label htmlFor="name" className="form__label">
            Add a task
          </label>
        </form>
      </div>
      <div>
        {tasks.map((task) => {
          return <TaskItem key={task.id} task={task} />;
        })}
      </div>
      <FooterTasks />
    </div>
  );
};

export default ListTasks;
