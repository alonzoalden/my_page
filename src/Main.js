import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import ProjectModal from './ProjectModal.js';
import Nav from './Nav.js';

const pictures = ["alonzo-wide.png", "runkeeper.png"]

class App extends Component {
  constructor() {
    super();

    this.state = {
      number: 1
    }

  }


  render() {

  let currentStyle = this.state.number === 1 ? pictures[0] : pictures[1]
  setInterval(function() {
    console.log('asfasdfasdfadsfHIHII');
    }, 3000);


    return (
      <div>

      <div className="Main">

        <div className="Main-page Main-layout">
          <Nav />


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


                    <p> Feel free and get in touch with me through any of my social network accounts or by email:<br/></p><p><strong>alonzoalden@gmail.com</strong></p>
                </div>



                <div className="projects">
                  <div className="project-display">
                  <h1> PROJECTS </h1>

                    <div className="project-board">

                      <ProjectModal
                        title="Affirmation"
                        img="affirmation-collage.png"
                        desc="Affirmation is a web based application where experienced software engineers can offer advice to developing engineers.  It's a tool for software developers of all levels to connect, inspire, and create a supportive community."
                        tech="React, Node.js, Express.js, PostgreSQL, Sequelize, Webpack, Auth0 and it's deployed via Heroku."
                        github="https://github.com/HRR20-Lotus/affirmation.io"
                        url="http://www.affirmation.io">
                      </ProjectModal>

                      <ProjectModal
                        title="Keep-Fit"
                        img="keep-fit-icon.png"
                        desc="Keep Fit is an exercise tool where you can design and plan upcoming workouts. This application provides structure and motivation to anyone who needs that extra support for their exercise regimen."
                        tech="PostgreSQL, Sequelize, Node.js, Express.js, React, Flux, Google Maps API, and Material UI"
                        github="https://github.com/hrr20-dino/Keep-Fit"
                        url="https://keep-fit-app.herokuapp.com/">
                      </ProjectModal>

                      <ProjectModal
                        title="My Portfolio"
                        img="portfolio.png"
                        desc="This is the website you are currently visiting. It has original design, style, and images by me. "
                        tech="React, Node.js, Express, Webpack"
                        github="https://github.com/alonzoalden/my_page"
                        url="https://keep-fit-app.herokuapp.com/">
                      </ProjectModal>
                      <ProjectModal
                        title="Run Keeper"
                        img="runkeeper.png"
                        desc="Run Keeper is a handy tool for runners to help them stay motivated and in-shape. You can score points and compete! Each run is logged with specific details such as intensity, duration and speed, resulting in a score."
                        tech="MongoDB, Express, Node.js, AngularJS 1.x (MEAN stack)"
                        github="https://github.com/alonzoalden/runkeeper"
                        url="false">
                      </ProjectModal>

                    </div>
                  </div>
                    <h3>Check out my <a href="https://github.com/alonzoalden">Github</a> to see more of my work.</h3><br/>
                </div>


              </div>
            </div>


        </div>
        <footer>
          <div className="bottom">
            <div className="bottom-left">
              <img src="lonbluebottle.png"></img>
            </div>
            <div className="bottom-mid"><span style={{color: '#8EAEBD'}}> Thanks for stopping by. </span><br/><span style={{color: '#30415D'}}>Get in touch.</span><br/>
              <span style={{color: '#30415D', fontSize: '18px'}}>alonzoalden@gmail.com</span>


                <table>
                  <tr>
                    <td>
                      <a href="https://github.com/alonzoalden/">GITHUB</a>
                    </td>
                    <td>
                      <a href="https://github.com/alonzoalden/">LINKEDIN</a>
                    </td>
                    <td>
                      <a href="https://github.com/alonzoalden/">STRAVA</a>
                    </td>
                    <td>
                      <a href="https://github.com/alonzoalden/">FACEBOOK</a>
                    </td>
                  </tr>
                </table>

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
