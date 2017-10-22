const Sequelize = require('sequelize'),
      { STRING } = Sequelize,
      db = require('../index');

const Campus = db.define('campuses', {
  name: {
    type: STRING,
    allowNull: false
  },
  city: STRING,
  location: STRING,
  image: STRING
}, {
  defaultScope: {
    include: [{ all: true }]
  }
});

module.exports = Campus;