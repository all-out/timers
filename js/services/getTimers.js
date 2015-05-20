app.factory('getTimers', ['$http', function($http) {
	return $http.get('https://luminous-torch-1719.firebaseio.com/timers.json')
	.success(function(data) {
		return data;
	})
	.error(function(err) {
		return err;
	});
}]);