// this is importing the entire folder
// this gets controllers/index.js
// that index file exports all the data from the folder
// this basically works as our URL Structure and choosing whether it's a GET or POST
const controllers = require('./controllers');

const router = (app) => {
  // if you make a GET request to page1, call the controller for page1
  app.get('/page1', controllers.page1);
  app.get('/page2', controllers.page2);
  app.get('/', controllers.index);

  // If there is anything that begins with a slash has contains anything else, call this
  // The order matters, so if this was at the top, every page would be notFound
  // Express adds middleware in order
  app.get('/*', controllers.notFound);

  // If I make a POST request, it will skip all of the above GET lines
};

module.exports = router;
