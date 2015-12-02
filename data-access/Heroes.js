var dazzle = require('dazzle');
var utils = require('./Utils.js');

var Heroes = {};

var apiKey = utils.getApiKey();
var api = new dazzle(apiKey);
delete apiKey;

Heroes.getHeroes = function() {
	var heroes;

	api.getHeroes(function(err, response) {
		heroes = response.heroes;
	});

	return heroes;
}

module.exports = {
	getHeroes: Heroes.getHeroes
};
