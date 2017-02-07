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
                <li><a href="http://www.google.com">HOME</a></li>
                <li><a href="http://www.google.com">PROJECTS</a></li>
                <li><a href="http://www.google.com">BLOG</a></li>
                <li><a href="http://www.google.com">CONTACT</a></li>
              </ul>
            </div>
            <div className="github">
              <div className="logo">
                GITHUB
              </div>
              <ul>
                <li><a href="http://www.google.com"><img src="github-black-24px.png"></img></a></li>
                <li><a href="http://www.google.com"><img src=""></img></a></li>

              </ul>
            </div>
            <div className="social sml">
              <div className="logo">
                SOCIAL
              </div>
              <ul>
                <li><a href="http://www.google.com"><img src="instagram-black-21px.png"></img></a></li>
                <li><a href="http://www.google.com"><img src="facebook-black-22px.png"></img></a></li>
                <li><a href="http://www.google.com"><img src="strava-black-24px.png"></img></a></li>
                <li><a href="http://www.google.com"><img src="In-Black-21px-TM.png"></img></a></li>

              </ul>
            </div>
          </header>
        </div>

            <div className="Main-photo">
              <div className="Main-photo-mask"></div>
            </div>

            <div className="Main-photo-text">
              <div className="Main-photo-text-name">alonzo alden</div>
              <div className="Main-photo-text-desc"><p><strong>FULL STACK ENGINEER</strong></p></div>
            </div>

            <div className="body">
              <div className="col-content">
                <div className="intro">
                  <h1>
                    Hi,
                  </h1>
                  <p> I'm a developer currently in the Greater Los Angeles area with remote experience. I'm passionate about creation and express it through web applications. I enjoy workong on all aspects of web development from small business sites to large scale interactive web applications.</p>
                    <p> Feel free and get in touch with me through any of my social network accounts or by email:<br/></p><p><strong>alonzo.alden@hackreactor.com</strong></p>
                </div>

                <div className="circle-connect">
                  <div className="intro-circle-connect"></div>
                  <div className="intro-circle-connect2"></div>
                </div>

                <div className="projects">
                  <div className="project-display">
                    <h1> PROJECTS </h1>
                  </div>
                </div>


              </div>
            </div>


        </div>
        <footer><div className="copyright"><p>Created by Alonzo Alden | Copyright 2017</p></div></footer>
      </div>
      </div>
    );
  }
}

export default App;
