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
      <div className="TeacherView">
        {this.props.name}
        <h4>Learner Rating</h4>
      </div>
    );
  }
}
