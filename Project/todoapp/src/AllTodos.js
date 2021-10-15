import React, { Component } from 'react';
import Todo from './Todo';
import './CSS/AllTodos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AllTodos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: null
		};
	}
	componentDidMount() {
		console.log('start');
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
	render() {
		let todos = this.state.todos;
		let show = <div />;
		if (todos !== null) {
			show = (
				<div className="container">
					<div className="todo-box">{todos.map((x) => <Todo key={x.Key} todo={x} />)}</div>
					<Link to="/todo/add-todo" className="add-todo-btn">
						Add Todo
						<i style={{ marginLeft: 20 }} className="fas fa-edit" />
					</Link>
				</div>
			);
		} else {
			show = (
				<div className="container">
					<div className="todo-box">
						<h1>Loading ...</h1>
					</div>
				</div>
			);
		}
		return <div>{show}</div>;
	}
}

export default AllTodos;
