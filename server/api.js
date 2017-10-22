'use strict';
const api = require('express').Router(),
      { Student, Campus, Teacher } = require('../db/models');

// REFACTOR:
//
// const restful = model => {
//   model.findAll({
//     include: [{ all: true }]
//   })
//     .then(all => res.json(all))
//     .catch(next);
// };
//
// api.use('/campuses', restful(Campus));
//
// ALSO: use module.exports = require().Router() && chaining

api.get('/campuses', (req, res, next) => {
  Campus.findAll({
    include: [{ all: true }]
  })
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
  Student.findAll({
    include: [{ all: true }]
  })
    .then(students => res.json(students))
    .catch(next);
});

api.get('/students/:studentId', (req, res, next) => {
  Student.findOne({
    where: {
      id: +req.params.studentId
    }
  })
    .then(student => res.json(student))
    .catch(next);
});

api.get('/teachers', (req, res, next) => {
  Teacher.findAll({
    include: [{ all: true }]
  })
    .then(teachers => res.json(teachers))
    .catch(next);
});

api.get('/teachers/:teacherId', (req, res, next) => {
  Teacher.findOne({
    where: {
      id: +req.params.teacherId
    }
  })
    .then(teacher => res.json(teacher))
    .catch(next);
});

api.post('/campuses', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => {
      return res.json({
        status: 200,
        message: 'Campus created successfully',
        campus,
      });
    })
    .catch(next);
});

api.post('/students', (req, res, next) => {
  Student.create(req.body)
    .then(student => {
      return res.json({
        status: 200,
        message: 'Student created successfully',
        student
      })
    })
    .catch(next);
});

api.post('/teachers', (req, res, next) => {
  Teacher.create(req.body)
    .then(teacher => {
      return res.json({
        status: 200,
        message: 'Teacher created successfully',
        teacher
      })
    })
    .catch(next);
});

api.put('/students/:studentId', (req, res, next) => {
  Student.update({
    name: req.body.name,
  }, {
    where: {
      id: +req.params.studentId,
    },
    isNewRecord: false,
    returning: true,
  })
    .then(updatedStudent => {
      return res.json({
        status: 200,
        message: 'Student updated successfully',
        student: updatedStudent[1][0]
      });
    })
    .catch(next);
});

api.put('/campuses/:campusId', (req, res, next) => {
  Campus.update({
    name: req.body.name
  }, {
    where: {
      id: +req.params.campusId,
    },
    isNewRecord: false,
    returning: true,
  })
    .then(updatedCampus => {
      return res.json({
        status: 200,
        message: 'Campus updated successfully',
        campus: updatedCampus[1][0]
      });
    })
    .catch(next);
});

api.put('/teachers/:teacherId', (req, res, next) => {
  Teacher.update({
    name: req.body.name,
  }, {
    where: {
      id: +req.params.teacherId,
    },
    isNewRecord: false,
    returning: true,
  })
    .then(updatedTeacher => {
      return res.json({
        status: 200,
        message: 'Teacher updated successfully',
        teacher: updatedTeacher[1][0]
      });
    })
    .catch(next);
});

api.delete('/campuses/:campusId', (req, res, next) => {
  Campus.destroy({
    where: {
      id: +req.params.campusId
    }
  })
    .then(res => res.send('Campus has been obliterated.'))
    .catch(next);
});

api.delete('/students/:studentId', (req, res, next) => {
  Student.destroy({
    where: {
      id: +req.params.studentId
    }
  })
    .then(res => res.send('Student has been sent back to Earth.'))
    .catch(next);
});

api.delete('/teachers/:teacherId', (req, res, next) => {
  Teacher.destroy({
    where: {
      id: +req.params.teacherId
    }
  })
    .then(res => res.send('Teacher freed from all duties.'))
    .catch(next);
});

module.exports = api;