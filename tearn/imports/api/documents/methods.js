import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Documents from './documents';
import rateLimit from '../../modules/rate-limit.js';


export const upsertDocument = new ValidatedMethod({
  name: 'documents.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    body: { type: String, optional: true },
    owner: { type: String, optional: true },
    isActive: { type: Boolean, optional: true, defaultValue: true },
    acceptedBy: { type: String, optional: true }
  }).validator(),
  run(document) {
    return Documents.upsert({ _id: document._id,  owner: Meteor.userId(), isActive: true }, { $set: document });
  },
});

export const removeDocument = new ValidatedMethod({
  name: 'documents.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Documents.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertDocument,
    removeDocument,
  ],
  limit: 5,
  timeRange: 1000,
});

Meteor.methods({
  getUsers: function (_id) {
    //Meteor.subscribe('allusers')
    check(_id, String);
    console.log(_id);
    const user = Accounts.users.findOne(_id); // TODO: fix, doesn't work on client side
    const profile = user && user.profile ? user.profile : 'undefined';
    return profile.name.first;

  }});
