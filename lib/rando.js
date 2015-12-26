var _ = require('lodash');

var graphTypes = {
    linear: require('./linear'),
    exponential: require('./exponential')
    // todo: add other types too
};

exports = module.exports = function(options) {

    this.settings = _.assign({
        type: 'linear',
        start: 0,
        end: 100,
        volatility: 0,
        steps: 20,
        precision: 2
    }, options);

    // todo: add a flag for debugging

    this.setStart = function(start) {
        this.settings.start = start;
        return this;
    };
    this.setEnd = function(end) {
        this.settings.end = end;
        return this;
    };
    this.setSteps = function(steps) {
        this.settings.steps = steps;
        return this;
    };
    this.setVolatility = function(volatility) {
        this.settings.volatility = volatility;
        return this;
    };
    this.setPrecision = function(precision) {
        this.settings.precision = precision;
        return this;
    };

    this.generate = function() {
        return graphTypes[this.settings.type].generate(this.settings);
    };

};
