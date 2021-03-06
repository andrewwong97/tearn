import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../documents';

Meteor.publish('documents.list', () => Documents.find({isActive: true}));

Meteor.publish('documents.view', (_id) => {
  check(_id, String);
  return Documents.find(_id);
});

Meteor.publish('allusers', function(){
	return Meteor.users.find();
});
