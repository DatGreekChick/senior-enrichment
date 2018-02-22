'use strict'
const debug = require('debug')('sql')
    , chalk = require('chalk')
    , Sequelize = require('sequelize')
    , pkg = require('../package.json')

const name = process.env.DATABASE_NAME || pkg.name
const connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${name}`

console.log(chalk.yellow(`Opening database connection to ${connectionString}`))

module.exports = new Sequelize(connectionString, {
  logging: debug,
  native: true
})

// run our models file (makes all associations for our Sequelize objects)
require('./models')