import React, { Component } from 'react'

class Greet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg : "Hello User , Please subscribe",
            isSubscribed : false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            msg : "Hey user ! Thanks for subscribing ...",
            isSubscribed : true
        })
    }
    
    render() {
        return (
            <div style={{display:'flex' , justifyContent:'center' , alignItems:'center',flexDirection:'column'}}>
                <h1>{this.state.msg}</h1>
                {/* {this.state.isSubscribed ? null : <button onClick={this.handleClick}>Subscribe Plz</button>} */}
                {!this.state.isSubscribed && <button onClick={this.handleClick}>Subscribe Plz</button>}
            </div>
        )
    }
}
export default Greet;