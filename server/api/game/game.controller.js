/**
 * Created by gabrielmuscalu on 17/02/16.
 */
'use strict';

var _ = require('lodash');
var Game = require('./game.model');

exports.index = function(req, res) {
    console.log(req);
    Game.find(function (err, games) {
        console.log(games);
        if(err) { return handleError(res, err); }
        return res.status(200).json(games);
    });
};

exports.show = function(req, res) {
    Game.findById(req.params.id, function (err, game) {
        if(err) { return handleError(res, err); }
        if(!game) { return res.status(404).send('Not Found'); }
        return res.json(game);
    });
};

exports.create = function(req, res) {
    Game.create(req.body, function(err, game) {
        if(err) { return handleError(res, err); }
        return res.status(201).json(game);
    });
};

exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    Game.findById(req.params.id, function (err, game) {
        if (err) { return handleError(res, err); }
        if(!game) { return res.status(404).send('Not Found'); }
        var updated = _.merge(game, req.body);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.status(200).json(game);
        });
    });
};

exports.destroy = function(req, res) {
    Game.findById(req.params.id, function (err, game) {
        if(err) { return handleError(res, err); }
        if(!game) { return res.status(404).send('Not Found'); }
        game.remove(function(err) {
            if(err) { return handleError(res, err); }
            return res.status(204).send('No Content');
        });
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}