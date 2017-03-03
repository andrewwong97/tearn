import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Image, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import Rating from '../components/Rating.js';


export default class Learner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="LearnerView">
        {this.props.name}
        <h4>Learner Rating</h4>
        <Rating rating="5.00" />
      </div>
    );
  }
}
