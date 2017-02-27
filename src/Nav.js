import React, { Component } from 'react';
import './Main.css';
import './Nav.css';
import Modal from 'react-modal';
import Scroll from 'react-scroll';

const Link = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll= Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

const customStyles = {
  overlay : {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2000,
    backgroundColor: '#CF6766'
  },
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '50%',
    fontFamily: 'Open Sans Condensed',
    fontSize: '90%',
    backgroundColor: '#CF6766',
    border: 'none'
  }
};

class Nav extends Component {
  constructor(props) {
    super(props);

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
    <div className="header-banner">
      <header>
        <div className="nav">

          <Link activeClass="active" to="top" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
            <div className="logo">
              ALONZO ALDEN
            </div>
          </Link>




              <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
                <div className="navButton">ABOUT</div>
              </Link>
              <Link activeClass="active" to="proj" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
                <div className="navButton">PROJECTS</div>
              </Link>
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
                <div className="navButton">BLOG</div>
              </Link>
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
                <div className="navButton">GITHUB</div>
              </Link>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
                <div className="navButton">CONTACT</div>
              </Link>


        </div>

        <div className="socialNetwork" onClick={this.openModal}>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="socialTab">
            <a href="https://github.com/alonzoalden/">GITHUB</a>
          </div>
          <div className="socialTab">
            <a href="https://github.com/alonzoalden/">LINKEDIN</a>
          </div>
          <div className="socialTab">
            <a href="https://github.com/alonzoalden/">STRAVA</a>
          </div>
          <div className="socialTab">
            <a href="https://github.com/alonzoalden/">INSTAGRAM</a>
          </div>
          <div className="socialTab">
            <a href="https://github.com/alonzoalden/">FACEBOOK</a>
          </div>
          <br /><br />
          <div className="socialTab" onClick={this.closeModal}>
            <a href="http://www.google.com">BACK</a>
          </div>

        </Modal>
          <img src="socialmedia.png"></img>
        </div>



      </header>
    </div>
    );
  }
}

export default Nav;
