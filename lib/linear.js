var utils = require('./utils');

exports.generate = function(options) {

    var result = [];
    var stepSize = (options.end - options.start) / options.steps;

    for (var i=0; i < options.steps; i++) {

        var nextVal = options.start + (stepSize * i);

        if (options.volatility !== 0) {
            nextVal = utils.getRandomNumber(nextVal - options.volatility, nextVal + options.volatility);
        }

        result.push(parseFloat(nextVal.toFixed(options.precision)));
    }

    // todo: only print this out in debug mode
    var r = '';
    for (var i=0, resultLength = result.length; i < resultLength; i++) {
        r += result[i] + ' -> ';
    }
    console.log(r);

    return result;

};