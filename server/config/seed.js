/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Round = require('../api/round/round.model');
var Game = require('../api/game/game.model');

// Insert seed data below
var roundSeed = require('../api/round/round.seed.json');
var gameSeed = require('../api/game/game.seed.json');

// Insert seed inserts below
Round.find({}).remove(function() {
  console.log("rounds",roundSeed);
  Round.create(roundSeed);
});
Game.find({}).remove(function() {
  console.log("games",gameSeed);
  Game.create(gameSeed);
});