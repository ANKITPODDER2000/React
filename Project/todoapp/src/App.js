import React, { Component } from 'react';
import TodoFrame from './TodoFrame';
import Login from './Login';
import TodoDetails from './TodoDetails';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AddTodo from './AddTodo';
import Header from './Header';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: true
		};
	}

	render() {
		return (
			<div className="app-container">
				<Header />
				<div className="inner-container">
					<BrowserRouter>
						<Switch>
							<Route exact path="/">
								{this.state.login ? <Redirect to="/todo" /> : <Redirect to="/login" />}
							</Route>
							<Route exact path="/login" component={Login} />
							<Route exact path="/todo">
								{this.state.login ? <TodoFrame /> : <Redirect to="/login" />}
							</Route>
							<Route exact path="/todo/add-todo" component={AddTodo} />
							<Route exact path="/todo/:id" component={TodoDetails} />
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default App;
