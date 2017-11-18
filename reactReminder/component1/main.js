import React from 'react';
import {AddNewTask} from "./newTask";
import {ToDoAppList} from "./appList";

export class Todo extends React.Component{
	constructor(props){
		super(props);
		// console.log(this.props.tasks[0]);
		this.state = {tasks : props.tasks};
		this.updateList = this.updateList.bind(this);
		this.removeTasks = this.removeTasks.bind(this);
		this.updateLocalStorage = this.updateLocalStorage.bind(this);
	}
				



	updateList(event){
		var updatedTask = this.state.tasks;
		updatedTask.push(event);
		this.setState({tasks: updatedTask});
		this.updateLocalStorage(updatedTask);

	}

	updateLocalStorage(txt){
		console.log("Task Saved");
		localStorage.setItem('storedTasks', JSON.stringify(txt));
	}

	removeTasks(txt){
		var updatedTask = this.state.tasks;
		var index = updatedTask.indexOf(txt);
		updatedTask.splice(updatedTask.indexOf(txt),1);
		this.setState({tasks: updatedTask});
		this.updateLocalStorage(updatedTask);
	}

	render(){
		return (
			<div>
				<h1> To Do App </h1>
				<AddNewTask updateList = {this.updateList} />
				<ToDoAppList tasks = {this.state.tasks} remove = {this.removeTasks}/>
			</div>
		);
	}
}