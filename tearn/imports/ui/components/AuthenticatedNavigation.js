import React from 'react';
import { browserHistory, Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const myProfile = () => browserHistory.push('/profile');

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

const AuthenticatedNavigation = () => (
  <div className="MainNav">
    <Nav>
      <LinkContainer to="/jobs">
        <NavItem eventKey={ 1 } href="/jobs">My Jobs</NavItem>
      </LinkContainer>
      <LinkContainer to="/profile">
        <NavItem eventKey={ 2 } href="/profile">My Profile</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavItem className="flex-img">
        <div className="profile-img"></div>
      </NavItem>
      <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
        <MenuItem eventKey={ 3.1 } onClick={ myProfile }>My Profile</MenuItem>
        <MenuItem eventKey={ 3.1 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);

export default AuthenticatedNavigation;
