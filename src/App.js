import React, { Component } from 'react';
import Gallery from './Gallery';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Header
        </header>
        <main>
          <Gallery />
        </main>
      </div>
    );
  }
}

export default App;
