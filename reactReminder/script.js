import React from 'react';
import ReactDOM from 'react-dom';
import {Shapes} from './component/main';

ReactDOM.render(
	<div>
		<Shapes name = "circle" color = "red"/>
		<Shapes name = "square" color = "#000"/>
		<Shapes name = "rectange" color = "blue"/>
	</div>,
	document.getElementById('todo')
);