import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';


export default class Jobs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Jobs">
        <div className="container add-margin">
          <Row>
            <Col xs={ 12 }>
              <div className="page-header clearfix">
                <h4 className="pull-left">Jobs</h4>
                <Link to="/jobs/new">
                  <Button bsStyle="success" className="pull-right" >Add a Job</Button>
                </Link>
              </div>
              <DocumentsList />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
