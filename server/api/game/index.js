/**
 * Created by gabrielmuscalu on 17/02/16.
 */
'use strict';

var express = require('express');
var controller = require('./game.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/round/:id', controller.findByRoundAndDate);
router.get('/round/dates/:id', controller.findDatesByRound);

module.exports = router;