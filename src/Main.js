import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : '#031424',
    zIndex           : 2000
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '380px',
    height: '600px',
    fontFamily: 'Open Sans Condensed',
    fontSize: '90%'
  }
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    }

  this.openModal = this.openModal.bind(this);
  this.afterOpenModal = this.afterOpenModal.bind(this);
  this.closeModal = this.closeModal.bind(this);

  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

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
                <li><a href="http://www.google.com">CONTACT</a></li>
              </ul>
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
                  <p> I'm a developer currently in the Greater Los Angeles area with remote experience. I'm passionate about creation and express it through web applications. I enjoy working on all aspects of web development from small business sites to large scale interactive web applications.</p>

                  <p> Here are some of the technologies I'm experienced in:
                    Javascript, Node.js, React, Angular, PostgreSQL, MongoDB, Webpack, Grunt, jQuery, HTML, CSS, Mocha and I strive to learn more. I'm competent in both front and back of the Full Stack.</p>


                    <p> Feel free and get in touch with me through any of my social network accounts or by email:<br/></p><p><strong>alonzo.alden@hackreactor.com</strong></p>
                </div>

                <div className="circle-connect">
                  <div className="intro-circle-connect"></div>
                  <div className="intro-circle-connect2"></div>
                </div>

                <div className="projects">
                  <div className="project-display">
                  <h1> PROJECTS </h1>

                    <div className="project-board">


                      <div className="project" onClick={this.openModal}>
                        <Modal
                          isOpen={this.state.modalIsOpen}
                          onAfterOpen={this.afterOpenModal}
                          onRequestClose={this.closeModal}
                          style={customStyles}
                          contentLabel="Example Modal"
                        >

                            <img style={{width: "380px", height: "380px"}} src="affirmation-collage.png"></img>


                          <h2>Affirmation</h2>
                          <p>Affirmation is a web based application where experienced software engineers can offer advice to developing engineers.  It's a tool for software developers of all levels to connect, inspire, and create a supportive community.</p>
                          <p><strong>Tech Stack:</strong> React, Node.js, Express.js, PostgreSQL, Sequelize, Webpack, Auth0 and it's deployed via Heroku. </p>
                          <div style={{display: 'flex'}}>
                            <div style={{flexGrow: '1', display: 'flex'}}>
                              <div className='button'>DEPLOYED LINK</div>
                              <div className='button'>GITHUB</div>
                            </div>
                            <div className='button'>CLOSE</div>
                          </div>
                        </Modal>

                        <img src="affirmation-collage.png"></img>
                        <h3> Affirmation </h3>
                      </div>
                      <div className="project">
                        <img src="keep-fit-icon.png"></img>
                        <h3> Keep-Fit </h3>
                      </div>
                      <div className="project">
                        <img src="portfolio.png"></img>
                        <h3> My Portfolio </h3>
                      </div>
                      <div className="project">
                        <img src="runkeeper.png"></img>
                        <h3> Run Keeper </h3>
                      </div>
                      <div className="project">
                        <div className="circle-icon">
                          <div className="letter">
                           DT
                          </div>
                        </div>
                        <h3> Dino Task </h3>
                      </div>
                    </div>
                  </div>
                    <h3>Check out my <a href="https://github.com/alonzoalden">Github</a> to see more of my work.</h3><br/><br/><br/>
                </div>


              </div>
            </div>


        </div>
        <footer>
          <div className="bottom">
            <div className="bottom-left">
              <h1>Alonzo Alden</h1>
                <ul>
                  SOCIAL:
                  <li><a href="https://www.instagram.com/attaboylonnie/"><img src="instagram-black-21px.png"></img></a></li>
                  <li><a href="https://www.facebook.com/alonzo.alden"><img src="facebook-black-22px.png"></img></a></li>
                  <li><a href="https://www.strava.com/athletes/929395"><img src="strava-black-24px.png"></img></a></li>
                  <li><a href="https://www.linkedin.com/in/alonzo-alden-46b28637"><img src="In-Black-21px-TM.png"></img></a></li>

                </ul>

            </div>
            <div className="bottom-right"><span style={{color: '#8EAEBD'}}> Thanks for stopping by. </span><br/><span style={{color: '#30415D'}}>Get in touch.</span>
            </div>
          </div>

          <div className="copyright"><p>© 2017 <a href="mailto:alonzoalden@gmail.com">Alonzo Alden</a> </p>
          </div>
        </footer>
      </div>
      </div>
    );
  }
}

export default App;
