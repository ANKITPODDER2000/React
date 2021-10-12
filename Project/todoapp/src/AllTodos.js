import React, { Component } from 'react';
import Todo from './Todo';
import todos from './Todos';
import './CSS/AllTodos.css';

class AllTodos extends Component {
	render() {
		return (
			<div className="container">
				<div className="todo-box">{todos.map((x) => <Todo todo={x} />)}</div>
			</div>
		);
	}
}

export default AllTodos;
