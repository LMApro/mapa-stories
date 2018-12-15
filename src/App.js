import React, { Component } from 'react';
import Gallery from './Gallery';
import './App.css';

class App extends Component {
  state = {
    photos: []
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {

  }


  render() {
    const {photos} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          hello
        </header>
        <main>
          <Gallery photos={photos} />
        </main>
      </div>
    );
  }
}

export default App;
