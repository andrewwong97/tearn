import React from 'react';
import { Jumbotron, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import LoginModal from '../components/LoginModal.js';

export default class Index extends React.Component {

  renderModal() {
    return Meteor.user() ? <Button bsStyle="primary"><Link to="/profile">My Profile</Link></Button> : <LoginModal />;
  }

  render() {
    return (
      <div className="Index">
        <Jumbotron className="jumbotron vignette">
          <span className="hero-text">
            <h2 style={{'font-size': '24pt'}}>Tearn</h2>
            <p style={{'font-size': '20pt'}}>Student to student on demand academic help based on the notion that students can be experts in one subject and need help in others.</p>
          </span>
          {this.renderModal()}
        </Jumbotron>
        <br></br>
      </div>
    );
  }

}
