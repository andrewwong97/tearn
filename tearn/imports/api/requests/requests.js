import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Requests = new Mongo.Collection('Requests');
export default Requests;

Requests.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Requests.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

// Documents.schema = new SimpleSchema({
//   title: {
//     type: String,
//     label: 'The title of the document.',
//   },
//   body: {
//     type: String,
//     label: 'The body of the document.',
//   },
// });

// Documents.attachSchema(Documents.schema);

// Factory.define('document', Documents, {
//   title: () => 'Factory Title',
//   body: () => 'Factory Body',
// });
