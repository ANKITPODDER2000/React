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
					<Link to={`/todo/${todo.Key}`}>
						<i class="fas fa-chevron-right" />
					</Link>
					<span className="check">
						<i class="fas fa-check" />
					</span>
					<span className="bin">
						<i class="fas fa-trash" />
					</span>
				</div>
			</div>
		);
	}
}

export default Todo;
