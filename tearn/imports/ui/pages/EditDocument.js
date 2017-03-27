import React from 'react';
import DocumentEditor from '../components/DocumentEditor.js';

const EditDocument = ({ doc }) => (
  <div className="EditDocument container add-margin">
    <h4 className="page-header">Editing "{ doc.title }"</h4>
    <DocumentEditor doc={ doc } />
  </div>
);

EditDocument.propTypes = {
  doc: React.PropTypes.object,
};

export default EditDocument;
