import React, { Component } from 'react';
import './Main.css';
import './ProjectModal.css';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(3, 20, 36, 0.8)',

    zIndex: 2000
  },
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '380px',
    height: '600px',
    fontFamily: 'Open Sans Condensed',
    fontSize: '90%'
  }
};

class ProjectModal extends Component {
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

  showDeployButton(url) {
    if (url === "false") {
      return;
    } else {

    return (
      <div>
        <a href={url} target="_blank">
          <div className='button'>DEPLOYED LINK</div>
        </a>
      </div>
      )
    }
  }

  render() {
    return (
      <div className="project pointer" onClick={this.openModal}>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <img style={{width: "380px", height: "380px"}} src={this.props.img}></img>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
          <p><strong>Tech Stack:</strong> {this.props.tech}</p>
          <div style={{display: 'flex'}}>
            <div style={{flexGrow: '1', display: 'flex'}}>

              {this.showDeployButton(this.props.url)}


              <a href={this.props.github} target="_blank">
                <div className='button'>GITHUB</div>
              </a>

            </div>
            <div onClick={this.closeModal} className='button pointer'>CLOSE</div>
          </div>
        </Modal>

        <img src={this.props.img}></img>
        <h3> {this.props.title} </h3>
      </div>
    );
  }
}

export default ProjectModal;
