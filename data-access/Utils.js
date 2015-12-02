var apiKeyJson = require('./apikey.json');

var getApiKey = function() {
	return apiKeyJson.steamApiKey;
};

module.exports = {
	getApiKey: getApiKey
};
