import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Image, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router'
import Teacher from './Teacher';
import Learner from './Learner';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 1,
      user: Meteor.user()
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
    // TODO: find a way to keep ratings on profile view, and use other two columns for actual learner/teacher things
    const teacherData = {
      teacherRating: '4.40'
    }

    const learnerData = {
      learnerRating: '5.00'
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
        <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={5} mdOffset={0}>
          <div className="profile-container">
            <h1>{this.getUsername()}</h1>
            <Nav className="profile-nav" bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
              <NavItem bsStyle="btn btn-success" eventKey={1}>Teacher</NavItem>
              <NavItem bsStyle="btn btn-success" eventKey={2}>Learner</NavItem>
            </Nav>
          </div>
          <div className="details">
            <h2>{Meteor.user().profile.school.school}</h2>
            <h3>Sophomore | Class of {this.getYear()}</h3>
            <h5>Major(s): {Meteor.user().profile.school.major}</h5>
            <h5>Minor(s): {Meteor.user().profile.school.minor}</h5>
          </div>
          <div className="profile-img"></div>
          {this.getView()}
        </Col>
      </div>
    );
  }
}
