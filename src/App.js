import React, { Component } from 'react';
import Entry from './entry.jsx';

class App extends Component {
  state = {
    style: {
      width: '100%',
      height: '100%'
    }
  }
  render() {
    return (
      <div className="App" style={this.state.style}>
        <Entry />
      </div>
    );
  }
}

export default App;
