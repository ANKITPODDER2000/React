import React, { Component } from 'react';
import AllTodos from './AllTodos';
import Header from './Header';
import './TodoFrame.css';

class TodoFrame extends Component {
	render() {
		return (
			<div className="TodoContainer">
				<Header />
				<AllTodos />
			</div>
		);
	}
}

export default TodoFrame;
