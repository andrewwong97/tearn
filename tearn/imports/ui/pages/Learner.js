import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Image, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import Rating from 'react-rating';


export default class Learner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsEmpty: ['fa fa-star-o fa-2x'],
      starsFull: ['fa fa-star fa-2x']
    }
  }

  render() {
    return (
      <div className="LearnerView">
        {this.props.name}
        <h4>Learner Rating</h4>
        <div className="Rating">
          <Rating placeholderRate={this.props.data.learnerRating} placeholder={this.state.starsFull} start={0} stop={5} fractions={2} readonly={true} empty={this.state.starsEmpty} full={this.state.starsFull} />
        </div>
        <h2 className="ratingTitle">{this.props.data.learnerRating}</h2>
      </div>
    );
  }
}
