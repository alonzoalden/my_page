import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';

class App extends Component {
  render() {
    return (
      <div>
      <h1>PRACTICE GUIDE</h1>
      <div className="Main">

        <div className="Main-page Main-layout">

          <header>header</header>
            <div className="Main-photo"></div>
            <div className="body">
              <div className="col-content">Main Content</div>
              <div className="col-navigation">Navigation</div>
              <div className="col-sidebar">Sidebar</div>
            </div>

          <footer>footer</footer>
        </div>

      </div>
      </div>
    );
  }
}

export default App;
