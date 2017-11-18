import React from 'react';

export class AddNewTask extends React.Component{
	constructor(props){
		super(props);
		this.submitted = this.submitted.bind(this);
	}

	submitted(event){
		event.preventDefault();
		var input = event.target.querySelector('input');
		var value = input.value;
		input.value = 'Please Input';
		this.props.updateList(value);

	}


	render(){
		return (
			<form onSubmit = {this.submitted}>
				<input type = "text"/>
			</form>
		);
	}
}