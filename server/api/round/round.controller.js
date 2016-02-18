/**
 * Created by gabrielmuscalu on 16/02/16.
 */
'use strict';

var _ = require('lodash');
var Round = require('./round.model');

exports.index = function(req, res) {
    Round.find(function (err, rounds) {
        if(err) { return handleError(res, err); }
        return res.status(200).json(rounds);
    });
};

exports.show = function(req, res) {
    Round.findById(req.params.id, function (err, round) {
        if(err) { return handleError(res, err); }
        if(!round) { return res.status(404).send('Not Found'); }
        return res.json(round);
    });
};

exports.create = function(req, res) {
    Round.create(req.body, function(err, round) {
        if(err) { return handleError(res, err); }
        return res.status(201).json(round);
    });
};

exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    Round.findById(req.params.id, function (err, round) {
        if (err) { return handleError(res, err); }
        if(!round) { return res.status(404).send('Not Found'); }
        var updated = _.merge(round, req.body);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.status(200).json(round);
        });
    });
};

exports.destroy = function(req, res) {
    Round.findById(req.params.id, function (err, round) {
        if(err) { return handleError(res, err); }
        if(!round) { return res.status(404).send('Not Found'); }
        round.remove(function(err) {
            if(err) { return handleError(res, err); }
            return res.status(204).send('No Content');
        });
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}