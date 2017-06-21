'use strict';

const app = require('../server');

module.exports = (status) => {
  if (!status) return Promise.resolve({});

  const query = {
    where: {status: status},
    fields: ['location', 'status', 'startDate'],
  };

  return app.models.Lesson.find(query);
};
