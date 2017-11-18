import React from 'react';

export class Shapes extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		var borderRadiusValue = "0 0";
		if(this.props.name == "circle"){
			borderRadiusValue = "50% 50%";
		}

		var styles = {
			width : "100px",
			height : "100px",
			borderRadius: borderRadiusValue,
			background : this.props.color
		};
		return (
			<div style = {styles}>

			</div>
		);
	}
}