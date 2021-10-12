import React, { Component } from 'react'

class ListComponent extends Component {
    render() {
        let list = [{country : 'India' , capital : 'Delhi' , key : 1} ,
                    { country : 'Canada' , capital : 'Ottawa' , key : 2} ,
                    { country : 'Sri Lanka' , capital : 'Sri Jayawardenepura Kotte' , key : 3}];
        return (
            <div>
                <ul>
                    {list.map(x => <li key={x.key}><b>{x.country}</b> -> {x.capital}</li>)}
                </ul>
            </div>
        )
    }
}

export default ListComponent;