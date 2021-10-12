import React, { Component } from 'react';
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";

class App extends Component {
    render() {
        if(!localStorage.getItem('username')) return <LoginForm />;
        return (
            <div>
                <NavBar />
                <ChatEngine 
                    height = "90vh"
                    projectID = "594a411a-00e1-4b9d-bcc0-bde1173fd953"
                    userName = {localStorage.getItem('username')}
                    userSecret = {localStorage.getItem('password')}
                    renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
                />
            </div>
        )
    }
}
export default App;