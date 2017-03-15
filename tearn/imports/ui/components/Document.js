import React from 'react';
import { browserHistory } from 'react-router';
import { Panel } from 'react-bootstrap';
import { removeDocument } from '../../api/documents/methods.js';

export default class Document extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSelect - this.handleSelect.bind(this);
    this.state = {
      open: null
    };
  }

  componentWillMount() {
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
  handleSelect(isOpen) {
    this.setState({
      open: (isOpen)
    });
   }


  render() {
    return (
      <div className="Document" key={ this.props._id }>
        <li className="job" onClick={ () => this.handleSelect(!this.state.open)}>
          { this.props.title }
          <span id="delete" aria-hidden="true" onClick={ () => {this.handleSelect(false)} }>&times;</span>
        </li>
        
        {console.log(this.state.open)}
        <Panel collapsible
          style={{'visibility': this.state.open ? 'visible' : 'collapse'}}
          expanded={this.state.open}>
          { this.props.body }
        </Panel>
      </div>
    );
  }
}
