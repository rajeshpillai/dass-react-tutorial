import React from 'react';
import './App.css';

import TodoApp from './components/TodoApp';

class App extends React.Component {
  //state = 0;
  constructor() {
    super();
    this.state = {
      counter: 0
    }

    this.onIncrement = this.onIncrement.bind(this);
  }

  onIncrement() {
    console.log(this);
    this.setState({
      counter: this.state.counter + 1
    });
  }

  onDecrement() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div className="App">
        <TodoApp />
      </div>
    );
  }
}

export default App;
