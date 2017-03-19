import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Image, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';


export default class Teacher extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TeacherView">
        <Col xs={10} xsOffset={1} md={3} mdOffset={0}>
          <h3>Open Teacher Requests</h3>
        </Col>
        <Col xs={10} xsOffset={1} md={4} mdOffset={0}>
          <h3>Finished Teacher Requests</h3>
        </Col>
      </div>
    );
  }
}
