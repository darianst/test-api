'use strict';

module.exports = function(app) {
  const Lesson = app.models.Lesson;
  const data = require('../fixtures/data');

  return Promise.all(
    data.map((lesson) => Lesson.create(lesson))
  ).then(lessonAdded => {
    console.log('Imported: ', lessonAdded);
  });
};
