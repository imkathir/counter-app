import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  //Life cycle hooks
  constructor() {
    super();
    console.log('App - Constructor');
    this.state.counters[4] = {
      id: 5, value: 44
    }
    this.state.totalCounters = this.state.counters.length;
    this.state.reset = this.state;
  }
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
//   let state = {
//     totalCounters: 4,
//     counters: [
//         { id: 1, value: 4 },
//         { id: 2, value: 0 },
//         { id: 3, value: 0 },
//         { id: 4, value: 0 }
//     ]
// };
this.setState(this.state.reset);

  console.log('Reaset');
}
  render() {
    console.log('App rendered');
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
  componentDidMount() {
    console.log("App Mounted");
    //Perfect place any Ajax calls
  }
}

export default App;
