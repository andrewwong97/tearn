import React from 'react';
import DocumentEditor from '../components/DocumentEditor.js';

const NewDocument = () => (
  <div className="NewDocument container add-margin">
    <h4 className="page-header">New Document</h4>
    <DocumentEditor />
  </div>
);

export default NewDocument;
