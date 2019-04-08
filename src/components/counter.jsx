import React, { Component } from 'react';

export default class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/500'
    };

    render() { 
        return (
            <div>
                <img src={this.state.imageUrl} alt=""/>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
