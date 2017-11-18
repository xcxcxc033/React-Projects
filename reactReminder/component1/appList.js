import React from 'react';

export class ToDoAppList extends React.Component{
	constructor(props){
		super(props);
		this.removeTheTarget = this.removeTheTarget.bind(this);
	}

	removeTheTarget(elem){
		var value = elem.target.parentNode.querySelector('span').innerText;
		this.props.remove(value);
	}

	TasksList(cur){
		// console.log(cur[0]);

		const listItems = cur.map((item, i) =>{
		 	return <li key = {i}><span>{item}</span><button onClick = {this.removeTheTarget}>X</button></li>
		 });
		return listItems;
	}

	render(){
		var listItems = this.TasksList(this.props.tasks);
		return (
			<ul>
				{listItems}
			</ul>
		);
	}
}