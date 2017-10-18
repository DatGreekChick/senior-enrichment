const Sequelize = require('sequelize'),
      { STRING } = Sequelize,
      db = require('../index');

const Student = db.define('students', {
  name: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    validate: {
      isEmail: true
    }
  },
  image: STRING
});

module.exports = Student;