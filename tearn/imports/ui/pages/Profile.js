import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Image, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 1,
    };
  }

  getUsername() {
    const user = Meteor.user();
    const name = user && user.profile ? user.profile.name : '';

    return name.first + ' '+ name.last;
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
        <div className="profile-container">
          <h1>{this.getUsername()}</h1>  
          <Nav className="profile-nav" bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
            <NavItem bsStyle="btn btn-success" eventKey={1}>Teacher</NavItem>
            <NavItem bsStyle="btn btn-success" eventKey={2}>Learner</NavItem>
          </Nav>
          <br></br>
        </div>
        <div className="profile-img"></div>
      </div>
    );
  }
}
