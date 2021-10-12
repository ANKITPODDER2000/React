import React, { Component } from 'react';
import TodoFrame from './TodoFrame';
import Login from './Login';
import TodoDetails from './TodoDetails';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: true
		};
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route exact path="/">
							{this.state.login ? <Redirect to="/todo" /> : <Redirect to="/login" />}
						</Route>
						<Route exact path="/login" component={Login} />
						<Route exact path="/todo">
							{this.state.login ? <TodoFrame /> : <Redirect to="/login" />}
						</Route>
						<Route exact path="/todo/:id" component={TodoDetails} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
