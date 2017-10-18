'use strict';
const Student = require('./student'),
      Teacher = require('./teacher'),
      Campus = require('./campus'),
      db = require('../index');

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

Student.hasOne(Campus);

Teacher.belongsToMany(Student, {
  through: 'student_instructor',
  foreignKey: 'teacherId'
});

Campus.belongsToMany(Student, {
  through: 'campus_students',
  foreignKey: 'campusId'
});
Campus.belongsToMany(Teacher, {
  through: 'campus_teachers',
  foreignKey: 'campusId'
});

module.exports = { db, Student, Teacher, Campus };