import React from 'react';
import { browserHistory, Link } from 'react-router';
import { Panel } from 'react-bootstrap';
import { removeDocument } from '../../api/documents/methods.js';

export default class Document extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
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

  getName(_id){
      var name = null;
      const subscription = Meteor.subscribe('allusers');
      name = Meteor.apply('getUsers', [_id], {returnStubValue:true });
      console.log("this is the name:"+subscription);
      return name;
    
    
  }
  isOwner() {
    return this.props.student === Meteor.user()._id ? 'visible' : 'collapse';
  }

  
    render() {
    return (
      <div className="Document" key={ this.props._id }>
        <li className="job" onClick={() => this.setState({open: !this.state.open})}>
          <div className="job-details">
            { this.props.title }
            <Link className="sliding" to="/profile">by user { this.getName(this.props.student)}</Link>
          </div>

          <span id="delete"
            aria-hidden="true" onClick={ (e) => {
            e.stopPropagation();
            this.handleRemove(this.props._id);
            }}
            style={{'visibility': this.state.isOwner}}>&times;</span>
        </li>

        <Panel collapsible
          style={{'visibility': this.state.open ? 'visible' : 'collapse'}}
          expanded={this.state.open}>
          { this.props.body }
        </Panel>
      </div>
    );
  }
}
