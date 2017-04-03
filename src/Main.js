import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';
import ProjectModal from './ProjectModal.js';
import Nav from './Nav.js';
import Scroll from 'react-scroll';

const Link = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll= Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

class App extends Component {
  constructor() {
    super();

    this.state = {
      number: 1
    }

  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive(to) {
    console.log(to);
  }

  render() {

    return (
      <div>

      <div className="Main">

        <div className="Main-page Main-layout">
          <Nav />

          <Element name="top" className="element">
            <div className="Main-photo">
              <div className="Main-photo-mask"></div>
            </div>
          </Element>
            <div className="Main-photo-text">
              <div className="Main-photo-text-name"><p>alonzo alden</p></div>
              <div className="Main-photo-text-desc"><p><strong>FULL STACK DEVELOPER</strong></p></div>
            </div>

            <div className="body" >
              <div className="col-content">
                <Element name="about" className="element">
                <div id="" className="intro">

              <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
                <div className="downSection pointer">
                  <div className="downArrow"><img src="downarrow.png"></img></div>
                </div>
              </Link>

                  <h1>
                    Hi,
                  </h1>
                  <p> I'm a developer currently in the Greater Los Angeles area with remote experience. I'm passionate about creation and express it through code. I enjoy working on all aspects of web development from small business sites to large scale interactive web applications.</p>

                  <p> Here are some of the technologies I'm experienced in:
                    Javascript, Node.js, React, Angular, PostgreSQL, MongoDB, Webpack, Grunt, jQuery, HTML, CSS, Mocha and I strive to learn more. I'm competent in both front and back of the Full Stack.</p>


                    <p> Feel free and get in touch with me through any of my social network accounts or by email:<br/></p><p><strong>alonzoalden@gmail.com</strong></p>
                </div>
                </Element>


                <Element name="proj" className="element">
                <div id="proj" className="projects">
                  <div className="project-display">
                  <Link activeClass="active" to="proj" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>

                  </Link>
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
                          url="false">
                        </ProjectModal>

                        <ProjectModal
                          title="My Portfolio"
                          img="portfolio.png"
                          desc="This is the website you are currently visiting. It has original design, style, and images by me. "
                          tech="React, SASS, Node.js, Express, Webpack"
                          github="https://github.com/alonzoalden/my_page"
                          url="https://alonzoalden.herokuapp.com">
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
                </Element>

              </div>
            </div>


        </div>
        <Element name="contact" className="element">
        <footer id="contact">
          <div className="bottom">
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>

          </Link>

            <div className="bottom-left"><span style={{color: '#8EAEBD'}}> Thanks for stopping by. </span><br/><span style={{color: '#30415D'}}>Get in touch.</span><br/>
              <span style={{color: '#30415D', fontSize: '18px'}}>alonzoalden@gmail.com</span>


                <table>
                  <tr>
                    <td>
                      <a href="https://github.com/alonzoalden/" target="_blank">GITHUB</a>
                    </td>
                    <td>
                      <a href="https://www.linkedin.com/in/alonzo-alden-46b28637/" target="_blank">LINKEDIN</a>
                    </td>
                    <td>
                      <a href="https://www.instagram.com/attaboylonnie/" target="_blank">INSTAGRAM</a>
                    </td>
                    <td>
                      <a href="https://www.strava.com/athletes/929395" target="_blank">STRAVA</a>
                    </td>
                    <td>
                      <a href="https://www.facebook.com/alonzo.alden" target="_blank">FACEBOOK</a>
                    </td>
                  </tr>
                </table>

            </div>
            <div className="bottom-right">
              <img src="lonbluebottle.png"></img>
            </div>
          </div>

          <div className="copyright"><p>© 2017 <a href="mailto:alonzoalden@gmail.com">Alonzo Alden</a> </p>
          </div>
        </footer>
        </Element>
      </div>
      </div>
    );
  }
}

export default App;
