import { Meteor } from 'meteor/meteor';
import React from 'react';

export default class Rating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Rating">
        <i className="fa fa-star fa-2x" aria-hidden="true"></i>
        <i className="fa fa-star fa-2x" aria-hidden="true"></i>
        <i className="fa fa-star fa-2x" aria-hidden="true"></i>
        <i className="fa fa-star fa-2x" aria-hidden="true"></i>
        <i className="fa fa-star fa-2x" aria-hidden="true"></i>
        <h2 className="ratingTitle">{this.props.rating}</h2>
      </div>
    )
  }
}
