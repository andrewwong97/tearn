import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { removeDocument } from '../../api/documents/methods.js'

const handleNav = (_id) => {
  browserHistory.push(`/jobs/${_id}`);
}

const handleRemove = (_id) => {
  console.log(_id);
  if(confirm("Are you sure? This is permanent!")) {
    removeDocument.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Document deleted!', 'success');
        browserHistory.push('/jobs');
      }
    });
  } else {
    browserHistory.push('/jobs');
  }
}

const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ul className="DocumentsList">
    {documents.map(({ _id, title }) => (
      <li className="job" key={ _id } onClick={ () => handleNav(_id) }>
        { title }
        <span id="delete" aria-hidden="true" onClick={ () => handleRemove(_id) }>&times;</span>
      </li>
    ))}
  </ul> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
