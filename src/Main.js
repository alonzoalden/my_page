import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';

class App extends Component {
  render() {
    return (
      <div>

      <div className="Main">

        <div className="Main-page Main-layout">

        <div className="header-banner">
          <header>
            <div className="nav">
              <div className="logo">
              a l o n z o - a l d e n
              </div>
              <ul>
                <li><a href="http://www.google.com">home</a></li>
                <li><a href="http://www.google.com">projects</a></li>
                <li><a href="http://www.google.com">strava</a></li>
                <li><a href="http://www.google.com">contact</a></li>
              </ul>
            </div>
          </header>
        </div>

            <div className="Main-photo">
              <div className="Main-photo-mask"></div>
            </div>

            <div className="Main-photo-text-name">alonzo alden</div>
            <div className="Main-photo-text-desc"><p>FULL STACK ENGINEER</p></div>

            <div className="body">
              <div className="col-content">

                <div className="card">
                </div>




              </div>
              <div className="col-navigation">Navigation</div>
              <div className="col-sidebar">Sidebar</div>
            </div>


        </div>

      </div>
      </div>
    );
  }
}

export default App;
