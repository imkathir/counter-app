import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = {
        totalCounters: 4,
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    handleIncrement =(counter) => {
        const counters = [...this.state.counters], i = counters.indexOf(counter);
        counters[i] = {...counter};
        counters[i].value++;
        this.setState({counters});
    }
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters, totalCounters: counters.length });
    }
    render() { 
        return ( 
            <div>
                TotalCounter =<button className="btn btn-secondary btn-sm">{this.state.totalCounters}</button>

                { this.state.counters.map(counter => 
                    <Counter key={counter.id} value={counter.value} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counter={counter}>
                    </Counter>
                    ) }
            </div> 
        );
    }
}
 
export default Counters;