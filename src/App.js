import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button type="button" class="btn btn-primary">Primary</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
