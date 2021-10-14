import React, { Component } from 'react';
import './CSS/AddTodo.css';

class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			givenBy: '',
			submittedBy: ''
		};
	}

	render() {
		return (
			<div className="form-container">
				<div className="form-inner-container">
					<h1>Add Todo</h1>
					<input
						type="text"
						placeholder="Todo Title"
						value={this.state.title}
						onChange={(e) => this.setState({ title: e.target.value })}
					/>
					<input
						type="text"
						placeholder="Given By"
						value={this.state.givenBy}
						onChange={(e) => this.setState({ givenBy: e.target.value })}
					/>
					<textarea
						placeholder="Description"
						value={this.state.description}
						onChange={(e) => this.setState({ description: e.target.value })}
					/>
					<input
						type="date"
						value={this.state.submittedBy}
						onChange={(e) => this.setState({ submittedBy: e.target.value })}
					/>
					<input type="submit" placeholder="Submit" className="btn" />
				</div>
			</div>
		);
	}
}

export default AddTodo;
