/**
 * Created by gabrielmuscalu on 17/02/16.
 */
'use strict';

var mongoose = require('mongoose'),
    Round = require('../round/round.model'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
    name: String,
    date: Date,
    round: {
        type: Schema.Types.ObjectId,
        ref: 'Round'
    },
    active: Boolean
});

module.exports = mongoose.model('Game', GameSchema);