import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    
    render() { 
        console.log("Counters rendered")
        return ( 
            <div>
                TotalCounter =<button className="btn btn-secondary btn-sm">{this.props.totalCounters}</button>
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                { this.props.counters.map(counter => 
                    <Counter key={counter.id} value={counter.value} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} counter={counter}>
                    </Counter>
                    ) }
            </div> 
        );
    }
}
 
export default Counters;