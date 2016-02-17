/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/rounds', require('./api/round'));
  app.use('/api/games', require('./api/game'))
};
