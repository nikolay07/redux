import React from "react";

const TaskList = ({ tasks, onChange, onDelete }) => {
  const sortedTask = tasks.slice().sort((a, b) => a.done - b.done);
  return (
    <ul className="list">
      {sortedTask.map((task) => {
        return (
          <Task
            key={task.id}
            {...task}
            onChange={onChange}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
