import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Image, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import Rating from 'react-rating';


export default class Teacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsEmpty: ['fa fa-star-o fa-2x'],
      starsFull: ['fa fa-star fa-2x']
    }
  }

  render() {
    return (
      <div className="TeacherView">
        {this.props.name}
        <h4>Teacher Rating</h4>
        <div className="Rating">
          <Rating placeholderRate={this.props.data.teacherRating} placeholder={this.state.starsFull} start={0} stop={5} fractions={5} readonly={true} empty={this.state.starsEmpty} full={this.state.starsFull} />
        </div>
        <h2 className="ratingTitle">{this.props.data.teacherRating}</h2>
      </div>
    );
  }
}
