import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Todo.css';

class Todo extends Component {
	render() {
		let todo = this.props.todo;
		return (
			<div className="todo">
				<p>{todo.title}</p>
				<div>
					<Link to={{ pathname: `/todo/${todo.Key}`, data: todo }}>
						<i className="fas fa-chevron-right" />
					</Link>
					<span className="check">
						<i className="fas fa-check" />
					</span>
					<span className="bin">
						<i className="fas fa-trash" />
					</span>
				</div>
			</div>
		);
	}
}

export default Todo;
