import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS/TodoDetails.css';

class TodoDetails extends Component {
	render() {
		console.log(this.props.location.data);
		let cont = this.props.location.data;
		return (
			<div className="todo-details">
				<div className="todo-con">
					<h1>{cont.title}</h1>
					<p className="cont">{cont.content}</p>
					<p className="sub">
						Given by : <b>{cont.givenBy}</b>
					</p>
					{/* <p>Given Date : {cont.givenDate.toDateString()}</p> */}
					<p className="sub-date">{new Date(cont.submittedBy).toDateString()}</p>
					<Link to={{ pathname: `/todo/${cont.Key}/edit`, data: cont }}>
						Edit <i style={{ marginLeft: 5 }} className="fas fa-pen" />
					</Link>
				</div>
			</div>
		);
	}
}

export default TodoDetails;
