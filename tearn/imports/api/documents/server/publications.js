import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Documents from '../documents';

Meteor.publish('documents.list', () => Documents.find({isActive: true, acceptedBy: {$exists: false}}));

Meteor.publish('documents.view', (_id) => {
  check(_id, String);
  return Documents.find(_id);
});

Meteor.publish('allusers', function(){
	return Meteor.users.find();
});

Meteor.publish('studentAcceptedJobs', (_id) => {
  check(_id, String);
  return Documents.find({owner: _id, acceptedBy: { $exists: true, $ne: null }});
});

Meteor.publish('teacherAcceptedJobs', (_id) => {
  check(_id, String);
  return Documents.find({acceptedBy: _id});
});
