import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Documents = new Mongo.Collection('Documents');
export default Documents;

Documents.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Documents.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Documents.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
  body: {
    type: String,
    label: 'The body of the document.',
  },
  owner: {
    type: String,
    label: 'Student Id',
  },
  isActive: {
    type: Boolean,
    label: 'Whether it is displayed on all jobs',
    defaultValue: true
  },
  acceptedBy: {
    type: String, // [String] if we want it to be array
    label: 'IDs of teacher who accepted the job',
    optional: true
  }
});

Documents.attachSchema(Documents.schema);

// For fixture data
Factory.define('document', Documents, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
  owner: () => 'Factory student',
  isActive: true,
  acceptedBy: 'Factory student'
});
