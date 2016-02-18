/**
 * Created by gabrielmuscalu on 17/02/16.
 */
'use strict';

var _ = require('lodash');
var Game = require('./game.model');

exports.index = function (req, res) {
    Game.find(function (err, games) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(games);
    });
};

exports.show = function (req, res) {
    Game.findById(req.params.id, function (err, game) {
        if (err) {
            return handleError(res, err);
        }
        if (!game) {
            return res.status(404).send('Not Found');
        }
        return res.json(game);
    });
};

exports.create = function (req, res) {
    Game.create(req.body, function (err, game) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(game);
    });
};

exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Game.findById(req.params.id, function (err, game) {
        if (err) {
            return handleError(res, err);
        }
        if (!game) {
            return res.status(404).send('Not Found');
        }
        var updated = _.merge(game, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(200).json(game);
        });
    });
};

exports.destroy = function (req, res) {
    Game.findById(req.params.id, function (err, game) {
        if (err) {
            return handleError(res, err);
        }
        if (!game) {
            return res.status(404).send('Not Found');
        }
        game.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(204).send('No Content');
        });
    });
};

exports.findByRoundAndDate = function (req, res) {
    var query = {$and: [{round: req.params.id}, {date: req.query.date}]};
    console.log(query);
    Game.find(query).exec(function (err, games) {
        if(err){
            handleError(res, err);
        }else{
            res.send({success: games});
        }
    });
};

exports.findDatesByRound = function (req, res) {
    var query = {round: req.params.id};
    Game.distinct("date", query).exec(function (err, dates) {
        if(err){
            handleError(res, err);
        }else{
            res.send({success: dates});
        }
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}