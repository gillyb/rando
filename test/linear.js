require('mocha');
var assert = require('assert');
var utils = require('../lib/utils');
var rando = require('../lib/rando');

describe('linear.js', function() {

    it('create a straight line with no volatility', function() {
        var r = new rando({
            type: 'linear',
            start: 10,
            end: 10,
            steps: 10,
            volatility: 0
        });
        var results = r.generate();
        for (var i=0; i<results.length; i++) {
            assert(results[i] === 10, 'all values should be 10');
        }
    });

    it('create an increasing line with no volatility', function() {
        var r = new rando({
            type: 'linear',
            start: 10,
            end: 100,
            steps: 10,
            volatility: 0
        });
        var results = r.generate();
        for (var i=0; i<results.length; i++) {
            if (i !== results.length-1) {
                assert(results[i + 1] >= results[i], 'each value should be greater than previous');
            }
        }
    });

    it('create an increasing line with volatility', function() {
        var r = new rando({
            type: 'linear',
            start: 10,
            end: 100,
            steps: 10,
            volatility: 3
        });
        var results = r.generate();
        for (var i=0; i<results.length; i++) {
            if (i !== results.length - 1) {
                assert(results[i + 1] + 6 >= results[i], 'each value should be greater than previous + twice the volatility');
            }
        }
    });

});