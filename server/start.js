'use strict';

const express = require('express'),
      bodyParser = require('body-parser'),
      { resolve } = require('path'),
      morgan = require('morgan'),
      { Student, Teacher, Campus } = require('../db/models');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  // Logging middleware (non-production only)
  app.use(morgan('dev'));
}

//The code below works because `.use` returns `this` which is `app`. So what we want to return in the `module.exports` is `app`, and we can chain on that declaration because each method invocation returns `app` after mutating based on the middleware

module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(resolve(__dirname, '..', 'public'))) // Serve static files from ../public
  .use('/api', require('./api')) // Serve our api
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html'))); // Send index.html for any
// other requests.

if (module === require.main) {
  // Start listening only if we're the main module.

  /* 
    https://nodejs.org/api/modules.html#modules_accessing_the_main_module
      - This (module === require.main) will be true if run via node foo.js, but false if run by require('./foo')
      - If you want to test this, log `require.main` and `module` in this file and also in `api.js`. 
        * Note how `require.main` logs the same thing in both files, because it is always referencing the "main" import, where we starting running in Node 
        * In 'start.js', note how `module` is the same as `require.main` because that is the file we start with in our 'package.json' -- `node server/start.js`
        * In 'api.js', note how `module` (this specific file - i.e. module) is different from `require.main` because this is NOT the file we started in and `require.main` is the file we started in
          ~ To help compare these objects, reference each of their `id` attributes
  */

  const PORT = 1337;
  const db = require('../db');

  const teachers = [
    {name: 'Ashi', email: 'ashi@io.com', image: 'url(image.com)'},
    {name: 'Eliot', email: 'elio@io.com', image: 'url(image.com)'},
    {name: 'Tom', email: 'tom@io.com', image: 'url(image.com)'},
    {name: 'Leigh', email: 'leigh@io.com', image: 'url(image.com)'},
    {name: 'Nimit', email: 'nimit@io.com', image: 'url(image.com)'},
    {name: 'David', email: 'david@io.com', image: 'url(image.com)'}
  ];

  const students = [
    {name: 'Eleni', email: 'eleni@io.com', image: 'url(image.com)'},
    {name: 'Kyle', email: 'kyle@io.com', image: 'url(image.com)'},
    {name: 'Cara', email: 'cara@io.com', image: 'url(image.com)'},
    {name: 'Shiratie', email: 'shiratie@io.com', image: 'url(image.com)'},
    {name: 'Caryn', email: 'caryn@io.com', image: 'url(image.com)'},
    {name: 'Joyce', email: 'joyce@io.com', image: 'url(image.com)'}
  ];

  const campuses = [
    {name: 'Phobos', location: 'Mars', inception: new Date()},
    {name: 'New York', location: 'Earth', inception: new Date()},
    {name: 'Moon', location: 'Milky Way Galaxy', inception: new Date()}
  ];

  db.sync({ force: true })
    .then(() => {
      app.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`);
      })
    })
    .then(() => Promise.all(students)
        .then(students => students.map(student => Student.create(student)))
        .then(() => Promise.all(teachers)
          .then(teachers => teachers.map(teacher => Teacher.create(teacher))))
        .then(() => Promise.all(campuses)
          .then(campuses => campuses.map(campus => Campus.create(campus))))
    .then(() => console.log('Database seeded.'))
    .catch(console.error));
}