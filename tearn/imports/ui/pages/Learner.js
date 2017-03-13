import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Image, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';


export default class Learner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="LearnerView">
        <Col xs={10} xsOffset={1} md={3} mdOffset={0}>
          <h3>Open Learner Requests</h3>
          <p>Introduction to Business with Pava</p>
        </Col>
        <Col xs={10} xsOffset={1} md={4} mdOffset={0}>
          <h3>Finished Learner Requests</h3>
          <p>Fourier Analysis with Jason</p>
          <p>Intro to Vid Game Design with Brian</p>
        </Col>
      </div>
    );
  }
}
