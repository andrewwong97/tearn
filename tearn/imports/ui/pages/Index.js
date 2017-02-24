import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router';


const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>Tearn</h2>
      <p>Student to student on demand academic help based on the notion that students can be experts in one subject and need help in others.</p>
      <Link to="/signup"><Button>Sign Up</Button></Link>
      <Link to="/login"><Button>Login</Button></Link>
    </Jumbotron>
  </div>
);

export default Index;
