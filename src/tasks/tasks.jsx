import React, { Component } from 'react';
import Task from 'tasks/task';
import createRequest from 'core/create-request';
import { fetchTasks } from 'core/api-config';
import AddTask from 'add-task/add-task';

class Tasks extends Component {
  state = {
    tasks: [
      { id: '1', text: 'React', isCompleted: true },
      { id: '2', text: 'Инициализация', isCompleted: true },
      { id: '3', text: 'Создание компонентов', isCompleted: true },
      { id: '4', text: 'Props', isCompleted: false },
      { id: '5', text: 'State', isCompleted: true },
      { id: '6', text: 'Context', isCompleted: true }
    ]
  };
addTask = (text) => {

  this.setState({ isLoading:true });

  createRequest(this.addTask, null, { text }).then(({status, data}) =>{
    if (status==='OK') {
      this.setState(({ tasks }) =>({
        isLoading: false,
        tasks: tasks.concat(data)
      }));
    }
  });
};
  componentDidMount() {
    createRequest(fetchTasks).then((result) =>{
      console.log(result);
    });
  };

  toggleTask = (event) => {
    const { id } = event.currentTarget.dataset;
    console.log(`update task-${id}`);

    this.setState(state => ({
      tasks: state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    }));
  };

  render() {
    const { tasks } = this.state;
    return (
      <div className="tasks">
        {tasks.map(task => (
          <Task task={task} toggleTask={this.toggleTask} key={task.id} />
        ))}
        <AddTask  addTask={this.addTask}/>
      </div>
    );
  }
}

export default Tasks;
