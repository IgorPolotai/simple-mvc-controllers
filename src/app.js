/* eslint-disable linebreak-style */
const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// New Stuff:
const app = express();

// If someone goes to a pathname called assets or that starts with assets, call this
// These app.use lines augement our requests and responses and run in the background
// app.js is where you do all your set up of stuff you're not handling, and router.js
// is where you add all of your custom code.
app.use('/assets', express.static(path.resolve(`${__dirname}/../client/`)));
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(favicon(`${__dirname}/../client/img/favicon.png`));

router(app);

app.listen(port, (err) => {
  if (err) { throw err; }
  console.log(`Listening on port ${port}`);
});
