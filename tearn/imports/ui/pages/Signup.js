import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import handleSignup from '../../modules/signup';

export default class Signup extends React.Component {
  componentDidMount() {
    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Signup">
        <Row className="signup-container">
          <Col xs={ 12 } sm={ 10 } md={ 10 } smOffset={ 1 } mdOffset={ 1 }>
            <form
              ref={ form => (this.signupForm = form) }
              onSubmit={ this.handleSubmit }
            >
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl
                      type="text"
                      ref="firstName"
                      name="firstName"
                      placeholder="First Name"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl
                      type="text"
                      ref="lastName"
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <ControlLabel>Email Address</ControlLabel>
                <FormControl
                  type="text"
                  ref="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  ref="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Graduation Year</ControlLabel>
                <FormControl
                  type="text"
                  ref="year"
                  name="year"
                  placeholder="Your Graduation Year"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>University</ControlLabel>
                <FormControl
                  type="text"
                  ref="school"
                  name="school"
                  placeholder="University?"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Major</ControlLabel>
                <FormControl
                  type="text"
                  ref="major"
                  name="major"
                  placeholder="Major?"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Minor</ControlLabel>
                <FormControl
                  type="text"
                  ref="minor"
                  name="minor"
                  placeholder="Minor?"
                />
              </FormGroup>
              <Button type="submit" bsStyle="success">Sign Up</Button>
              <p>Already have an account? <Link to="/login">Log In</Link>.</p>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
