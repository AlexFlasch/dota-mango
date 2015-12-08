var rp = require('request-promise');

var apiKey;

function Crystalys(key) {
	apiKey = key;

	var apiStructure = {
		MatchStats: ApiComponent(
			'IDOTA2MatchStats_570/',
			{
				getRealtimeStats: Endpoint(
					'GetRealtimeStats/v1',
					{
						serverSteamId: Parameter(
							'server_steam_id',
							true
						)
					}
				)
			}
		),
		Match: ApiComponent(
			'IDOTA2Match_570',
			{
				getLeagueListing: Endpoint(
					'GetLeagueListing/v1'
					// no parameters
				),
				getLiveLeagueGames: Endpoint(
					'GetLiveLeagueGames/v1',
					{
						leagueID: Parameter(
							'league_id',
							false
						),
						matchID: Parameter(
							'match_id',
							false
						)
					}
				),
				getMatchDetails: Endpoint(
					'GetMatchHistory/v1',
					{
						matchID: Parameter(
							'match_id',
							true
						)
					}
				),
				getMatchHistory: Endpoint(
					this,
					'GetMatchHistory/v1',
					{
						heroID: Parameter(

							'hero_id',
							false
						),
						gameMode:
					}
				),
				getMatchHistoryBySequenceNum: Endpoint(

				),
				getScheduledLeagueGames: Endpoint(

				),
				getTeamInfoByTeamID: Endpoint(

				),
				getTopLiveGame: Endpoint(

				),
				getTournamentPlayerStats: Endpoint(

				)
			}
		),
		StreamSystem: ApiComponent(
			'IDOTA2StreamSystem_570',
			{
				getBroadcasterInfo: Endpoint(

				)
			}
		),
		Ticket: ApiComponent(
			'IDOTA2Ticket_570',
			{
				setSteamAccountPurchased: Endpoint(

				),
				steamAccountValidForEvent: Endpoint(

				)
			}
		),
		Economy: ApiComponent(
			'IEconDOTA2_570',
			{
				getEventStatsForAccount: Endpoint(

				),
				getGameItems: Endpoint(

				),
				getHeroes: Endpoint(

				),
				getItemIconPath: Endpoint(

				),
				getRarities: Endpoint(

				),
				getTournamentPrizePool: Endpoint(

				)
			}
		),

	};
	// end ApiStructure
	
	return apiStructure;
}

var baseRequestUrl = 'https://api.steampowered.com/';

function generateRequestUrl(parameter) {
	var requestUrl =
		baseRequestUrl +
		parameter.endpoint.component.url +
		parameter.endpoint.url +
		'?key=' + apiKey;

	// for(var parameter in parameter.endpoint.parameters)
};

// base Parameter
// name : String
// value : Function (returns Dynamic)
// required : Boolean
var Parameter = function(parentEndpoint, parameterName, parameterRequired) {
	var that = this;

	this.endpoint = parentEndpoint;
	this.name = parameterName;
	this.required = parameterRequired;
}

// base Endpoint
// url : String
var Endpoint = function(parentComponent, endpointName, endpointUrl) {
	var that = this;

	this.component = parentComponent;
	this.name = endpointName;
	this.url = endpointUrl;
	this.parameters = {};

	this.addParameter = function(parameter) {
		Object.defineProperty(that.parameters, parameter.name, parameter);
		var newParameterName = parameter.name;
		
		var newParameter = that.parameters[newParameterName];
		newParameter.parent = that;
	}
	
	this.getResponse = function(params) {
		var requiredParams = [];
		
		for(var param in that.parameters) {
			if(param.required) {
				requiredParams.push(param);
			}
		}
		
		for(var i = 0; i < requiredParams.length; i++) {
			if(params[requiredParams[i]] === undefined) {
				throw new Error("A required parameter was undefined.");
			}
		}
	}

	return this;
}

// base ApiComponent
// baseUrl : String
var ApiComponent = function(componentName, componentUrl) {
	var that = this;

	this.name = componentName;
	this.url = componentUrl;
	this.endpoints = {};

	this.addEndpoint = function(endpoint) {
		Object.defineProperty(that.endpoints, endpoint.name, endpoint);
		var newEndpointName = endpoint.name;
		
		var newEndpoint = that.endpoints[newEndpointName];
		newEndpoint.parent = that;
	}
};



module.exports = {
	Crystalys: Crystalys
};
