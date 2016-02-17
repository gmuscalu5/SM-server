/**
 * Created by gabrielmuscalu on 16/02/16.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RoundSchema = new Schema({
    name: String,
    active: Boolean
});

module.exports = mongoose.model('Round', RoundSchema);