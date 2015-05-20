app.directive('programListing', function() {
	return {
		restrict: 'E',
		scope: {
			listing: '=',
		},
		templateUrl: 'https://dl.dropboxusercontent.com/s/pdsnrbewnvnnfnn/programListing.html' // js/directives/programListing.html
	};
});