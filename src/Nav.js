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
            ALONZO ALDEN
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

        <div className="socialNetwork">
          <img src="socialmedia.png"></img>
        </div>



      </header>
    </div>
    );
  }
}

export default Nav;
