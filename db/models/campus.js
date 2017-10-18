const Sequelize = require('sequelize'),
      { STRING, DATE, INTEGER } = Sequelize,
      db = require('../index');

const Campus = db.define('campuses', {
  name: {
    type: STRING,
    allowNull: false
  },
  location: STRING,
  image: STRING,
  inception: DATE
});

module.exports = Campus;