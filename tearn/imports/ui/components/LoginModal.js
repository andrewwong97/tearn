import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import Signup from '../pages/Signup.js';


export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    let close = () => this.setState({ show: false});

    return (
      <div className="LoginModal">
        <div className="modal-container">
          <Button
            bsStyle="primary"
            onClick={() => this.setState({ show: true})}
          >
            Get Started
          </Button>

          <Modal
            show={this.state.show}
            onHide={close}
            container={this}
            aria-labelledby="contained-modal-title"
            style={{weight:300}}
          >
            <Modal.Header closeButton>
              <Modal.Title className="text-center" id="contained-modal-title">Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-left">
              <Signup />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
};
