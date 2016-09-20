angular
	.module('ngRace')
	.factory('raceFactory', function($http) {

		function getRaces() {
			return $http.get('data/data.json');
		}

		return {
			getRaces: getRaces
		}
	});