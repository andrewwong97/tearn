import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Button, Row, Col, Nav, NavItem } from 'react-bootstrap';
import Teacher from '../components/Teacher.js';
import Learner from '../components/Learner.js';
import Rating from 'react-rating';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 1,
      user: Meteor.user(),
      starsEmpty: ['fa fa-star-o fa-2x'],
      starsFull: ['fa fa-star fa-2x']
    };
  }

  getUsername() {
    const user = Meteor.user();
    const name = user && user.profile ? user.profile.name : '';
    return user ? `${name.first} ${name.last}` : '';
  }

  getYear() {
    const user = Meteor.user();
    const year = user && user.profile && user.profile.year ? user.profile.year : '';
    return user ? `${year.year}` : '';
  }

  getView() {
    // TODO: calculation
    const teacherData = {
      somevar: 'foo'
    }

    const learnerData = {
      somevar: 'bar'
    }

    return this.state.activeKey == 1 ? <Teacher data={teacherData} /> : <Learner data={learnerData} />
  }

   handleSelect(selectedKey) {
      this.setState({
        activeKey: selectedKey
      });
   }

    render() {
    console.log(this.getUsername() == 'undefined undefined');
    return (
      <div className="Profile">
        <div className="container add-margin">
          <Col className="left" xs={10} xsOffset={1} sm={10} smOffset={1} md={5} mdOffset={0}>
            <h1>{this.getUsername()}</h1>
            <Nav className="profile-nav" bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
              <NavItem bsStyle="btn btn-success" eventKey={1}>Teacher</NavItem>
              <NavItem bsStyle="btn btn-success" eventKey={2}>Learner</NavItem>
            </Nav>
            <div className="profile-img">
              <img src="profile.png" />
              <Button bsStyle="success">Edit</Button>
            </div>
            <div className="details">
              <h2>{Meteor.user().profile.school.school}</h2>
              <h3>Sophomore | Class of {this.getYear()}</h3>
              <h4>Major(s): {Meteor.user().profile.school.major}</h4>
              <h4>Minor(s): {Meteor.user().profile.school.minor}</h4>
              <br></br>
            </div>

            <h4>Teacher Rating</h4>
            <Rating placeholderRate={4.20} placeholder={this.state.starsFull} start={0} stop={5} fractions={5} readonly={true} empty={this.state.starsEmpty} full={this.state.starsFull} />
            <h2 className="ratingTitle">4.20</h2>

            <h4>Learner Rating</h4>
            <Rating placeholderRate={4.30} placeholder={this.state.starsFull} start={0} stop={5} fractions={2} readonly={true} empty={this.state.starsEmpty} full={this.state.starsFull} />
            <h2 className="ratingTitle">4.30</h2>
          </Col>
          {this.getView()}
        </div>
      </div>
    );
  }
}
