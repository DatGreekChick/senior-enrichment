'use strict';

const express = require('express'),
      bodyParser = require('body-parser'),
      { resolve } = require('path'),
      morgan = require('morgan'),
      { Student, Teacher, Campus } = require('../db/models');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(resolve(__dirname, '..', 'public')))
  .use('/api', require('./api'))
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')));

if (module === require.main) {
  const PORT = 1337,
        db = require('../db'),
        { teachers, students, campuses } = require('./seed');

  db.sync({ force: true })
    .then(() => {
      app.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`);
      })
    })
    .then(() => Promise.all(students)
        .then(students => students.map(student => Student.create(student)))
        .then(() => Promise.all(teachers)
          .then(teachers => teachers.map(teacher => Teacher.create(teacher))))
        .then(() => Promise.all(campuses)
          .then(campuses => campuses.map(campus => Campus.create(campus))))
    .then(() => console.log('Database seeded.'))
    .catch(console.error));
}