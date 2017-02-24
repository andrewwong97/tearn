import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Requests from './requests';
import rateLimit from '../../modules/rate-limit.js';

export const upsertRequest = new ValidatedMethod({
  name: 'requests.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    body: { type: String, optional: true },
  }).validator(),
  run(request) {
    return Requests.upsert({ _id: request._id }, { $set: request });
  },
});

rateLimit({
  methods: [
    upsertRequest,
  ],
  limit: 5,
  timeRange: 1000,
});
