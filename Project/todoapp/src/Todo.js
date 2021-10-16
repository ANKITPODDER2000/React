import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Todo.css';

// AiFillCheckCircle, AiFillCloseCircle
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDone: this.props.todo.isDone
		};
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
				this.setState({
					isDone: x.data.isDone
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		let todo = this.props.todo;
		let t = this.state.isDone ? 'far fa-times-circle' : 'fas fa-check';
		console.log(t);
		return (
			<div className={this.state.isDone ? 'todo done' : 'todo'}>
				<p>{todo.title}</p>
				<div>
					<Link to={{ pathname: `/todo/${todo.Key}`, data: todo }}>
						<i className="fas fa-chevron-right" />
					</Link>
					<span className="check" onClick={this.handleCheck} style={{ cursor: 'pointer' }}>
						{this.state.isDone ? (
							<AiOutlineClose color="black" size="20px" />
						) : (
							<AiOutlineCheck color="black" size="20px" />
						)}
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
