import React, { Component } from "react";
import TaskList from "./TaskList";
import CreateTaskInput from "./CreateTaskInput";
import { createTask, updateTask, deleteTask } from "../tasksGateway";

import { taskListSelectors } from "../tasks.selectors";
import * as tasksActions from "../tasks.actions";
import { connect } from "react-redux";

class TodoList extends Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  handleTaskStatusChange = (id) => {
    const { tasks } = this.state;
    const { done, text, createDate } = tasks.find(
      (task) => task.id === id
    );
    const updatedTask = {
      text,
      createDate,
      done: !done,
    };
    updateTask(id, updatedTask).then(this.props.getTaskList());
  };

  handleTaskCreate = (text) => {
    createTask({
      text,
      done: false,
      createDate: new Date().toISOString(),
    }).then(() => this.fetchTask());
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTask());
  };

  render() {
    console.log(this.props.state);
    console.log(taskListSelectors);
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.handleTaskCreate} />
          <TaskList
            tasks={this.props.tasks}
            onChange={this.handleTaskStatusChange}
            onDelete={this.handleTaskDelete}
          />
        </main>
      </>
    );
  }
}

const mapState = (state) => {
  return {
    tasks: [],
    //tasks: taskListSelectors(state),
  };
};

const mapDispatch = { getTaskList: tasksActions.getTaskList };

export default connect(mapState, mapDispatch)(TodoList);
