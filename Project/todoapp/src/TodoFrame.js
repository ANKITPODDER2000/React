import React, { Component } from 'react';
import AllTodos from './AllTodos';
import './TodoFrame.css';

class TodoFrame extends Component {
	render() {
		return (
			<div className="TodoContainer">
				<AllTodos />
			</div>
		);
	}
}

export default TodoFrame;
