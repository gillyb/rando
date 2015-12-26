require('mocha');
var assert = require('assert');
var utils = require('../lib/utils');

describe('utils.js', function() {

    it('getRandomNumber should always be in given range', function() {

        for (var i=0; i<1000; i++) {
            var r = utils.getRandomNumber(1, 10);
            assert(r >= 1 && r <= 10);
        }

    });

});