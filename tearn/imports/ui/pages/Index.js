import React from 'react';
import { Jumbotron, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import LoginModal from '../components/LoginModal.js';


const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>Tearn</h2>
      <p>Student to student on demand academic help based on the notion that students <br></br> can be experts in one subject and need help in others.</p>
      <Link to="/signup" style={{'margin-right': '.25em'}}><Button>Sign Up</Button></Link>
      <Link to="/login"><Button>Login</Button></Link>
      <br></br>
      <LoginModal />
    </Jumbotron>
  </div>
);

export default Index;
