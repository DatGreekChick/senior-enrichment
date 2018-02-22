'use strict'
const Student = require('./student')
    , Teacher = require('./teacher')
    , Campus = require('./campus')
    , db = require('../index')

Campus.hasMany(Teacher, {
  foreignKey: 'campusName',
  sourceKey: 'name',
  constraints: false,
  as: 'teachers'
})

Teacher.belongsTo(Campus, {
  foreignKey: 'campusName',
  targetKey: 'name',
  constraints: false,
  as: 'campus'
})

Campus.hasMany(Student, {
  foreignKey: 'campusName',
  sourceKey: 'name',
  constraints: false,
  as: 'students'
})

Student.belongsTo(Campus, {
  foreignKey: 'campusName',
  targetKey: 'name',
  constraints: false,
  as: 'campus'
})

Teacher.hasMany(Student, {
  foreignKey: 'teacherName',
  sourceKey: 'name',
  constraints: false,
  as: 'students'
})

Student.belongsTo(Teacher, {
  foreignKey: 'teacherId',
  targetKey: 'id',
  constraints: false,
  as: 'teacher'
})

module.exports = { db, Student, Teacher, Campus }
