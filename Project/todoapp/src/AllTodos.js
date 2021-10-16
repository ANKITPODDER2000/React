import React, { Component } from 'react';
import Todo from './Todo';
import './CSS/AllTodos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AllTodos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange() {
		let reqOptions = {
			url: `http://127.0.0.1:8000/todo`,
			method: 'GET',
			'Content-Type': 'application/x-www-form-urlencoded'
		};
		axios
			.request(reqOptions)
			.then((x) => {
				this.setState({ todos: x.data });
				console.log(this.state);
			})
			.catch((err) => console.log(err));
	}
	componentDidMount() {
		// console.log('start');
		this.handleChange();
	}
	render() {
		let todos = this.state.todos;
		return (
			<div>
				<div className="container">
					<div className="todo-box">
						{todos.map((x) => <Todo key={x.Key} todo={x} handleChange={this.handleChange} />)}
					</div>
					<Link to="/todo/add-todo" className="add-todo-btn">
						Add Todo
						<i style={{ marginLeft: 20 }} className="fas fa-edit" />
					</Link>
				</div>
			</div>
		);
	}
}

export default AllTodos;
