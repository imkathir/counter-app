import React, { Component } from 'react';

export default class Counter extends Component {
    state = {
        count: 0
    };

    render() { 
        return (
            <React.Fragment>
                <h1>Hello World</h1>
                <button>Increment</button>
            </React.Fragment>
        );
    }
}
 
