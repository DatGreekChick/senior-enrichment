'use strict';
const api = require('express').Router(),
      Campus = require('../db/models/campus'),
      Student = require('../db/models/student');

/*
POST
- new campus
- new student
PUT
- updated student info for one student
- updated campus info for one campus
DELETE
- a campus
- a student
 */

api.get('/campuses', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

api.get('/campuses/:campusId', (req, res, next) => {
  Campus.findOne({
    where: {
      id: +req.params.campusId
    }
  })
    .then(campus => res.send(campus))
    .catch(next);
});

api.get('/students', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

api.get('/students/:studentId', (req, res, next) => {
  Campus.findOne({
    where: {
      id: +req.params.studentId
    }
  })
    .then(student => res.send(student))
    .catch(next);
});

module.exports = api;