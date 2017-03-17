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
        <Jumbotron className="jumbotron-fluid">
          <h2>Tearn</h2>
          <p>Student to student on demand academic help based on the notion that students can be experts in one subject and need help in others.</p>
          {this.renderModal()}
        </Jumbotron>
        <br></br>
      </div>
    );
  }

}
