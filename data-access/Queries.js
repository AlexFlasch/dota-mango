var apiKey = require('./apiKey.json').steamApiKey;
var rp = require('request-promise');

var baseRequestUrl = 'https://api.steampowered.com/';

function generateRequestUrl(parameter) {
	var requestUrl =
		baseRequestUrl +
		parameter.endpoint.component.url +
		parameter.endpoint.url +
		'?key=' + apiKey +
		parameter.name +
}

// base Parameter
// name : String
// value : Function (returns Dynamic)
// required : Boolean
function Parameter(endpoint, name, required) {
	var that = this;

	endpoint: endpoint,
	name: name,
	required: required

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
		return rp()
	};
}

// base Endpoint
// url : String
function Endpoint(component, name, url) {
	var that = this;

	component: component,
	name: name,
	url: url,

	function addParameter(parameter) {
		Object.defineProperty(that, parameter.name, parameter);
	}

	return this;
}

// base ApiComponent
// baseUrl : String
function ApiComponent(name, url)
	var that = this;

	url: url,

	function addEndpoint(endpoint) {
		Object.defineProperty(that, endpoint.name, endpoint);
	}

	return this;
};

var ApiStructure = {
	MatchStats: new ApiComponent(
		'IDOTA2MatchStats_570/',
		{
			getRealtimeStats: new Endpoint(
				'GetRealtimeStats/v1',
				{
					serverSteamId: new Parameter(
						'server_steam_id',
						// value (supplied upon request)
						true
					)
				}
			)
		}
	),
	Match: new ApiComponent(
		'IDOTA2Match_570',
		{
			getLeagueListing: new Endpoint(
				'GetLeagueListing/v1'
				// no parameters
			),
			getLiveLeagueGames: new Endpoint(
				'GetLiveLeagueGames/v1',
				{
					leagueID: new Parameter(
						'league_id',
						// value (supplied upon request)
						false
					),
					matchID: new Parameter(
						'match_id',
						// value (supplied upon request)
						false
					)
				}
			),
			getMatchDetails: new Endpoint(
				'GetMatchHistory/v1',
				{
					matchID: new Parameter(
						'match_id',
						// value (supplied upon request)
						true
					)
				}
			),
			getMatchHistory: new Endpoint(
				'GetMatchHistory/v1',
				{
					heroID: new Parameter(
						'hero_id',
						// value (supplied upon request)
						false
					),
					gameMode:
				}
			),
			getMatchHistoryBySequenceNum: new Endpoint(

			),
			getScheduledLeagueGames: new Endpoint(

			),
			getTeamInfoByTeamID: new Endpoint(

			),
			getTopLiveGame: new Endpoint(

			),
			getTournamentPlayerStats: new Endpoint(

			)
		}
	),
	StreamSystem: new ApiComponent(
		'IDOTA2StreamSystem_570',
		{
			getBroadcasterInfo: new Endpoint(

			)
		}
	),
	Ticket: new ApiComponent(
		'IDOTA2Ticket_570',
		{
			setSteamAccountPurchased: new Endpoint(

			),
			steamAccountValidForEvent: new Endpoint(

			)
		}
	),
	Economy: new ApiComponent(
		'IEconDOTA2_570',
		{
			getEventStatsForAccount: new Endpoint(

			),
			getGameItems: new Endpoint(

			),
			getHeroes: new Endpoint(

			),
			getItemIconPath: new Endpoint(

			),
			getRarities: new Endpoint(

			),
			getTournamentPrizePool: new Endpoint(

			)
		}
	),

};
// end ApiStructure
