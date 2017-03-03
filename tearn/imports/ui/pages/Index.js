import React from 'react';
import { Jumbotron, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import LoginModal from '../components/LoginModal.js';

export default class Index extends React.Component {

  render() {

    return (
      <div className="Index">
        <Jumbotron className="text-left">
          <h2>Tearn</h2>
          <p>Student to student on demand academic help based on the notion that students <br></br> can be experts in one subject and need help in others.</p>
          <LoginModal />
          <br></br>
        </Jumbotron>
      </div>
    );
  }

}
