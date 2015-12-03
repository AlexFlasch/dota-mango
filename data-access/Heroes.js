var dazzle = require('dazzle');
var utils = require('./Utils.js');

var Heroes = {};

var apiKey = utils.getApiKey();
var api = new dazzle(apiKey);

Heroes.getHeroes = function() {

}

module.exports = {
	getHeroes: Heroes.getHeroes
};
