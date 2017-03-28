import React from 'react';
import { browserHistory, Link } from 'react-router';
import { Button, Panel } from 'react-bootstrap';
import { removeDocument, acceptJob } from '../../api/documents/methods.js';

export default class Document extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.state = {
      open: null,
      isOwner: null
    };
  }

  componentWillMount() {
    this.setState({
      open: false,
      isOwner: this.isOwner()
    });
  }

  handleRemove(_id) {
    if(confirm("Are you sure? This is permanent!")) {
      removeDocument.call({ _id }, (error) => {
        if (error) {
          console.log(`Error deleting document ${_id}: ${error.reason}.`);
        } else {
          console.log(`Document ${_id} deleted.`);
        }
      });
    }
  }

  getUser(_id){
      var name = null;
      const subscription = Meteor.subscribe('allusers');
      name = Meteor.apply('getUsers', [_id], {returnStubValue:true });
      // console.log("this is the name:"+subscription);
      return name;
  }

  isOwner() {
    return this.props.owner === Meteor.userId() ? true : false;
  }

  handleAccept(_id) {
    // set acceptedBy the current Meteor.userId()
    var teacherid = Meteor.userId();
    acceptJob.call({_id, teacherid}, (error) => {
      if (error) {
        console.log("Error accepting job")
      } else {
        console.log(`User ${this.getUser(teacherid)} accepted job ${this.props.title}.`);
      }
    });
  }

  renderAccept() {
    if (!this.state.isOwner) {
      return <Button className="accept"
        bsStyle="success"
        onClick={ (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.handleAccept(this.props._id)
          }}>Accept</Button>;
    } else if (this.state.isOwner) {
      return <Button className="edit"
        bsStyle="success"><Link to={`/jobs/${this.props._id}/edit`}>Edit</Link></Button>;
    }
  }

  render() {
    return (
      <div className="Document" key={ this.props._id }>
        <li className="job">
            <span className="title">
              { this.props.title.slice(0, 150) }
            </span>

            <Panel collapsible className="job-body"
              style={{'visibility': this.state.open ? 'visible' : 'collapse'}}
              expanded={this.state.open}>
              { this.props.body }
            </Panel>

            <Link className="author" to="/profile">by user { this.getUser(this.props.owner) }</Link>

            <span id="delete"
              aria-hidden="true" onClick={ (e) => {
              e.stopPropagation();
              this.handleRemove(this.props._id);
              }}
              style={{'visibility': this.state.isOwner ? 'visible' : 'collapse'}}>
            &times;</span>
            <span id="expand"
              aria-hidden="true" onClick={ (e) => {
              e.stopPropagation();
              this.setState({open: !this.state.open});
              }}>
              &#43;</span>

            {this.renderAccept()}
        </li>

      </div>
    );
  }
}
