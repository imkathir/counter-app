import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
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
handleReset = () => {
  let state = {
    totalCounters: 4,
    counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ]
};
this.setState(state);

  console.log('Reaset');
}
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
        <main className='container'>
            <Counters
              totalCounters={this.state.totalCounters}
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
            />
        </main>
     </React.Fragment>
    );
  }
}

export default App;
