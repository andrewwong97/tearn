import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';
import Messages from '../../api/documents/messages.js';


export default class MessagesShow extends React.Component {
  constructor(props) {
    super(props);
  }

  getMessages(){
    return [
      { _id: 1, time: new Date(), text: "QQQQ"},
      { _id: 2, time: new Date(), text: "AAAA"}
    ]
  }

  renderMessages(){
    return this.getMessages().map((message) => {
      return <Message key={message._id} message={message} />;
    });

  }

  render() {
    return (
      <div className="Jobs">
        <ul>
          {this.renderMessages()}
        </ul>
      </div>
    );
  }
}
