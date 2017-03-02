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
        {this.props.name}
        <h4>Learner Rating</h4>
        <div className="learnerRating">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}
