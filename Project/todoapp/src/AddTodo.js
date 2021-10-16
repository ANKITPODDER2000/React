import axios from 'axios';
import React, { Component } from 'react';
import './CSS/AddTodo.css';

class AddTodo extends Component {
	constructor(props) {
		super(props);
		let todo = this.props.location.data;
		// console.log(todo);
		this.state = {
			title: todo === undefined ? '' : todo.title,
			description: todo === undefined ? '' : todo.content,
			givenBy: todo === undefined ? '' : todo.givenBy,
			submittedBy: todo === undefined ? '' : todo.submittedBy,
			Key: todo === undefined ? 'key' : todo.Key
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		let content = {
			title: this.state.title,
			givenBy: this.state.givenBy,
			content: this.state.description,
			submittedBy: this.state.submittedBy,
			Key: this.state.Key
		};
		axios
			.post('http://127.0.0.1:8000/todo/add-todo', content)
			.then((x) => alert('Todo is added successfully ...'))
			.catch((err) => console.log(err));
		this.setState({
			title: '',
			description: '',
			givenBy: '',
			submittedBy: ''
		});
		e.preventDefault();
	}
	render() {
		return (
			<div className="form-container">
				<form className="form-inner-container" onSubmit={this.handleSubmit}>
					<h1>{this.props.location.data === undefined ? 'Add Todo' : 'Edit Todo'}</h1>
					<input
						type="text"
						placeholder="Todo Title"
						value={this.state.title}
						onChange={(e) => this.setState({ title: e.target.value })}
						required
					/>
					<input
						type="text"
						placeholder="Given By"
						value={this.state.givenBy}
						onChange={(e) => this.setState({ givenBy: e.target.value })}
						required
					/>
					<textarea
						placeholder="Description"
						value={this.state.description}
						onChange={(e) => this.setState({ description: e.target.value })}
						required
					/>
					<input
						type="date"
						value={this.state.submittedBy}
						onChange={(e) => this.setState({ submittedBy: e.target.value })}
						required
					/>
					<input type="submit" placeholder="Submit" className="btn" />
				</form>
			</div>
		);
	}
}

export default AddTodo;
