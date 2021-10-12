import React, { Component } from 'react';
import { RightOutlined , LoginOutlined, LogoutOutlined } from '@ant-design/icons';

class NavBar extends Component {
    handleClick = () =>{
        let ele = document.querySelector("#root > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)");
        ele.classList.toggle('showLeftSlide');
    }
    render() {
        return (
            <div className="navbar">
                <div>
                    <RightOutlined 
                        className="left-menu"
                        onClick = {this.handleClick}
                    />
                    <p>Friend Chat</p>
                </div>
                <div>
                    <p>Logout</p>
                    <LogoutOutlined className="logout"/>
                </div>
            </div>
        )
    }
}
export default NavBar;