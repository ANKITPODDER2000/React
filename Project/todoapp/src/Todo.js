import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.handleCheck = this.handleCheck.bind(this);
	}

	handleCheck() {
		let reqOptions = {
			url: `http://localhost:8000/todo/toogle-done/${this.props.todo.Key}`,
			method: 'GET'
		};
		axios
			.request(reqOptions)
			.then((x) => {
				console.log(x.data);
				this.props.handleChange();
			})
			.catch((err) => console.log(err));
	}

	render() {
		let todo = this.props.todo;
		return (
			<div className="todo">
				<p>{todo.title}</p>
				<div>
					<Link to={{ pathname: `/todo/${todo.Key}`, data: todo }}>
						<i className="fas fa-chevron-right" />
					</Link>
					<span className="check" onClick={this.handleCheck}>
						{!todo.isDone ? <i className="fas fa-check" /> : <i className="far fa-times-circle" />}
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
