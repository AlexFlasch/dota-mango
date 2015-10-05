var app = angular.module('mango');

app.service('webSocketService', ['$http', function($http){
	var server = new WebSocket("wss://" + __address__);

	server.onopen = function(event) {
		server.send('')
	}
}])
