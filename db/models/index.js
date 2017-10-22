'use strict';
const Student = require('./student'),
      Teacher = require('./teacher'),
      Campus = require('./campus'),
      db = require('../index');

Student.belongsTo(Campus);

Teacher.hasMany(Student);
Teacher.belongsTo(Campus);

Campus.hasMany(Student);
Campus.hasMany(Teacher);

module.exports = { db, Student, Teacher, Campus };