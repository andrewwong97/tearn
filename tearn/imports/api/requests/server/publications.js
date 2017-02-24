import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Requests from '../requests';

Meteor.publish('requests.list', () => Requests.find());

Meteor.publish('requests.view', (_id) => {
  check(_id, String);
  return Requests.find(_id);
});
