import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Messages = new Mongo.Collection('Messages');
export default Messages;

/*Messages.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Messages.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Messages.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
  body: {
    type: String,
    label: 'The body of the document.',
  },
  student: {
    type: String,
    label: 'Student Id',
  },

});

Messages.attachSchema(Messages.schema);*/
