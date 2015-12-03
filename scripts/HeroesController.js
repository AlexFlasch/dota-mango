var heroes = require('./../data-access/Heroes.js');

var app = angular.module('mango');

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('heroes', {
			url: '/heroes',
			templateUrl: '../views/heroes.html',
			controller: 'HeroesCtrl'
		});
})

app.controller('HeroesCtrl', ['HeroesService', function(heroesService) {

	var scope = this;
	scope.heroes = heroesService.getHeroes();

}]);

app.service('HeroesService', [function() {
	this.getHeroes = function() {
		return heroes.getHeroes();
	}
}]);
