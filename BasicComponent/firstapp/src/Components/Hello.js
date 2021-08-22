import React, { Component } from 'react';
import HelloUser from './HelloUser';

class Hello extends Component {
    render() {
        return (
            <>
                <h3>Welcome Message</h3>
                <hr/>
                <ul>
                    <HelloUser name="Ram"/>
                    <HelloUser name="Sam"/>
                    <HelloUser name = "Jimmy"/>
                </ul>
            </>
        )
    }
}

export default Hello;