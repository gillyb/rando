exports = module.exports = {

    getRandomNumber: function(min, max) {
        return Math.random() * (max - min) + min;
    },
    getRandomInt: function(min, max) {
        return Math.round(this.getRandomNumber(min, max));
    }

};