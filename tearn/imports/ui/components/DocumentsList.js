import React from 'react';
import { browserHistory } from 'react-router';
import { Alert, Panel } from 'react-bootstrap';
import Document from './Document.js';


const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <ul className="DocumentsList">
    {documents.map(({ _id, title, body, owner }) => (
      <Document _id={_id} title={title} body={body} owner={owner} key={_id}/>
    ))}
  </ul> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};

export default DocumentsList;
