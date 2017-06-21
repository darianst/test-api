'use strict';

const id = require('../../server/endpoints/id');
const status = require('../../server/endpoints/status');

module.exports = function(Lesson) {
  Lesson.validatesInclusionOf('status', {in: ['incomplete', 'complete', 'cancelled']});

  Lesson.id = id;
  Lesson.remoteMethod('id', {
    description:
      'Return lesson by id',
    accepts: [
      {arg: 'id', type: 'number', required: true},
    ],
    returns: {type: 'object', root: true},
    http: {verb: 'get'},
  });

  Lesson.status = status;
  Lesson.remoteMethod('status', {
    description:
      'Return lessons by status',
    accepts: [
      {arg: 'status', type: 'string', required: true},
    ],
    returns: {type: 'array', root: true},
    http: {verb: 'get'},
  });
};
