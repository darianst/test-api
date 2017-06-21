'use strict';

const app = require('../server');
const geolib = require('geolib');
const R = require('ramda');

const prepareLesson = (lesson) => {
  const totalDistance = lesson.route ?
    geolib.getPathLength(R.map((el) => ({longitude: el[0], latitude: el[1]}), lesson.route.coordinates)) :
    0;
  const extraData = {
    days: parseInt((new Date() - new Date(lesson.startDate)) / (1000 * 60 * 60 * 24)),
    distance: totalDistance,
    routes: lesson.route,
  };
  return Object.assign(lesson, extraData);
};

module.exports = (id) => {
  if (!id) return Promise.resolve({});

  const query = {
    where: {id: id},
  };

  return app.models.Lesson.findOne(query)
    .then(lesson =>
      lesson ? prepareLesson(lesson) : {}
    );
};
