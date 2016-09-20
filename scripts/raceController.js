angular
	.module('ngRace')
	.controller('raceController', function($scope, raceFactory) {

		$scope.races;
		var $increment = 0.5;

		$scope.buyHorse = function(horse, race) {
			horse.sold++;
			race.pot += horse.price;
			horse.pot += horse.price;
			horse.price = horse.price + $increment;
			horse.eachwin = horse.pot/horse.sold;
			race.sold++;
			

		}

		$scope.unbuyHorse = function(horse, race) {
			horse.sold--;
			race.pot -= horse.price;
			horse.pot -= horse.price;
			race.pot -= horse-price;
			horse.price = horse.price - $increment;
			horse.eachwin = horse.pot/horse.sold;
			race.sold--;
		}

		raceFactory.getRaces().success(function(data) {
			$scope.races = data;
		}).error(function(error) {
			console.log(error);
		});

	});