const Sequelize = require('sequelize'),
      { STRING, ARRAY } = Sequelize,
      db = require('../index');

const Teacher = db.define('teachers', {
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
  image: STRING,
  languagesKnown: {
    type: ARRAY(STRING),
    defaultValue: ['JavaScript']
  }
});

module.exports = Teacher;