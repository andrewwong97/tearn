import React from 'react';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (_id) => {
  browserHistory.push(`/jobs/${_id}`);
}

const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ul className="DocumentsList">
    {documents.map(({ _id, title }) => (
      <li class="job" key={ _id } onClick={ () => handleNav(_id) }>
        { title }
        <div id="delete" aria-hidden="true">&times;</div>
      </li>
    ))}
  </ul> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
