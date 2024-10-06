import React from "react";
import CheckboxComplete from "../checkbox/CheckboxComplete";
import CheckboxIncomplete from "../checkbox/CheckboxIncomplete";
import { RxCross1 } from "react-icons/rx";
import { toggleTasks, deleteTasks } from "../../tasks/taskSlice";
import { useDispatch } from "react-redux";
import "./taskStyle.css";
const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="task_line_text"
      key={task.name}
      onClick={() => dispatch(toggleTasks(task))}
    >
      {task.done ? <CheckboxComplete /> : <CheckboxIncomplete />}
      <p
        className="task_text"
        style={{
          color: task.done ? "#A8A8B4" : "#575767",
          textDecoration: task?.done ? " line-through" : "",
        }}
      >
        {task.name}
      </p>
      <div>
        <RxCross1
          color={"#575767"}
          onClick={() => dispatch(deleteTasks(task.id))}
        />
      </div>
    </div>
  );
};

export default TaskItem;
