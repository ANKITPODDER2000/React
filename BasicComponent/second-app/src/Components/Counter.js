import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
             count : 0
        }
        this.Update = this.Update.bind(this);
    }
    // Update(){
    //     this.setState({
    //         count : this.state.count + 1
    //     } , () => console.log(`count value is : ${this.state.count}`))
    //     // this.setState(prevState => ({
    //     //     count : prevState.count + val
    //     // }))

    // }
    // UpdateMod(val){
    //     for(let i = 0 ; i < val ; i++){
    //         this.Update();
    //     }
    // }

    Update(val){
        this.setState(
            preVal => ({
                count : preVal.count + val,
            })
        );
    }

    render() {
        return (
            <div>
                <h1>Counter Value : {this.state.count}</h1>
                <div>
                    <button onClick={() => this.Update(2)}>+</button>
                    <button onClick = {() => this.Update(-2)}>-</button>
                </div>
            </div>
        )
    }
}
export default Counter;