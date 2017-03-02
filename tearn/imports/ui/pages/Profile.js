import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Image, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';


export default class Profile extends React.Component {
  constructor(state) {
    super(state);
    this.handleSelect = this.handleSelect;
           this.state = {
            activeKey: 1
        };

  }

   handleSelect(selectedKey) {
      this.setState({
            activeKey: selectedKey
        });
   }

  render() {
    return (
      <div className="Profile">
        <div className="container">
          <h1>My Profile</h1>
          <Nav className="profile-nav" bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
            <NavItem bsStyle="btn-success" eventKey={1}>Teacher</NavItem>
            <NavItem bsStyle="btn-success" eventKey={2} title="Item">Learner</NavItem>
          </Nav>
          <Row>
            <Col xs={6} md={4}>
              <div className="profile-img"></div>
            </Col>
          </Row>
          <br></br>
        </div>
      </div>
    );
  }
}
