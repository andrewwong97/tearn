import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Image, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
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
    return user ? `${name.first} ${name.last}` : 'My Profile';
  }

  getView() {
    return this.state.activeKey == 1 ? <Teacher name={'I am a Teacher!'} /> : <Learner name={'I am a Learner!'} />
  }

   handleSelect(selectedKey) {
      this.setState({
        activeKey: selectedKey
      });
   }

  render() {
    return (
      <div className="Profile">
        <div className="profile-container">
          <h1>{this.getUsername()}</h1>
          <Nav className="profile-nav" bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
            <NavItem bsStyle="btn btn-success" eventKey={1}>Teacher</NavItem>
            <NavItem bsStyle="btn btn-success" eventKey={2}>Learner</NavItem>
          </Nav>
          <br></br>
        </div>
        <div className="profile-img"></div>
        {this.getView()}
      </div>
    );
  }
}
