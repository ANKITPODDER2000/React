import React , {Component} from 'react'

// const HelloUser = (props) => {
//     return <li>Hello {props.name}</li>
// }

class HelloUser extends Component{
    constructor(){
        super();
        this.state = {
            welcomeString : `Hello`
        }
    }
    handleClick = () => {
        this.setState({
            welcomeString : `Hey`
        })
    }
    render(){
        // return (
        //     <>
        //         <li>Hello {this.props.name} 
        //             <a href="#" onClick = {() => alert("HEy")}>Click me User</a>
        //         </li>
        //         <br/>
        //     </>
        // );
        return (
            <>
                <li onClick={this.handleClick}>{this.state.welcomeString} {this.props.name}</li>
                <br/>
            </>
        );
    }
}

export default HelloUser;
