import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Image, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import Rating from '../components/Rating.js';


export default class Teacher extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TeacherView">
        {this.props.name}
        <h4>Teacher Rating</h4>
        <Rating rating="4.95" />
      </div>
    );
  }
}
