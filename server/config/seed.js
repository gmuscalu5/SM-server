/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Round = require('../api/round/round.model');

// Insert seed data below
var roundSeed = require('../api/round/round.seed.json');

// Insert seed inserts below
Round.find({}).remove(function() {
  Round.create(roundSeed);
});