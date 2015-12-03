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

	setParents(apiStructure);
	
	return apiStructure;
}

var baseRequestUrl = 'https://api.steampowered.com/';

// recursively define parent pointers for each child in the api structure
function setParents(node) {
	if(node)
}

function generateRequestUrl(parameter) {
	var requestUrl =
		baseRequestUrl +
		parameter.endpoint.component.url +
		parameter.endpoint.url +
		'?key=' + apiKey;

	for(var parameter in parameter.endpoint.parameters)
}

// base Parameter
// name : String
// value : Function (returns Dynamic)
// required : Boolean
function Parameter(parentEndpoint, parameterName, parameterRequired) {
	var that = this;

	var endpoint = parentEndpoint;
	var name = parameterName;
	var required = parameterRequired;


	// Retrun the Parameter in a new function that will keep
	// the properties that were just passed in but will now only
	// accept value as a parameter, and set value. Kinda hacky. :l
	var paramProps = {
		name: that.name,
		required: that.required
	}

	return function(value) {
		var parameterProps = that.paramProps;

		Object.defineProperty(parameterProps, parameterProps.value, value);

		// return the promise object which will allow resolving when needed
		return rp(generateRequestUrl(that));
	};
}

// base Endpoint
// url : String
function Endpoint(parentComponent, endpointName, endpointUrl) {
	var that = this;

	var component = parentComponent;
	var name = endpointName;
	var url = endpointUrl;
	var parameters: {};

	function addParameter(parameter) {
		Object.defineProperty(parameters, parameter.name, parameter);
	}

	return this;
}

// base ApiComponent
// baseUrl : String
function ApiComponent(componentName, componentUrl)
	var that = this;

	var name = componentName;
	var url = comopnentUrl;
	var endpoints = {};

	function addEndpoint(endpoint) {
		Object.defineProperty(endpoints, endpoint.name, endpoint);
	}

	return this;
};



module.exports = {
	Crystalys: Crystalys
};
