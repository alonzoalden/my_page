import React, { Component } from 'react';
import './Main.css';
import './Nav.css';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

    return (
    <div className="header-banner">
      <header>
        <div className="nav">
          <div className="logo">
            a l o n z o - a l d e n
          </div>
          <table>
            <tr>
              <td><a href="http://www.google.com">ABOUT</a></td>
              <td><a href="http://www.google.com">PROJECTS</a></td>
              <td><a href="http://www.google.com">BLOG</a></td>
              <td><a href="http://www.google.com">GITHUB</a></td>
              <td><a href="http://www.google.com">CONTACT</a></td>
            </tr>
          </table>

        </div>
        <div className="github">
          <div className="logo">
            GITHUB
          </div>
          <ul>
            <li><a href="https://github.com/alonzoalden"><img src="github-black-24px.png"></img></a></li>
            <li><a href=""><img src=""></img></a></li>

          </ul>
        </div>
        <div className="social sml">
          <div className="logo">
            SOCIAL
          </div>
          <ul>
            <li><a href="https://www.instagram.com/attaboylonnie/"><img src="instagram-black-21px.png"></img></a></li>
            <li><a href="https://www.facebook.com/alonzo.alden"><img src="facebook-black-22px.png"></img></a></li>
            <li><a href="https://www.strava.com/athletes/929395"><img src="strava-black-24px.png"></img></a></li>
            <li><a href="https://www.linkedin.com/in/alonzo-alden-46b28637"><img src="In-Black-21px-TM.png"></img></a></li>

          </ul>
        </div>
      </header>
    </div>
    );
  }
}

export default Nav;
