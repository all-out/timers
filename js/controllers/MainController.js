app.controller('MainController', ['$scope', 'getTimers', function($scope, getTimers) {

    getTimers.success(function(data) {
        $scope.clocks = data;
    });

    $scope.foo = [
                    {
                        "datetime" : 1432011600000,
                        "name" : "Our stront RF runs out"
                    },
                    {
                        "datetime" : "new Date(2015, 04, 22, 00, 00, 00)",
                        "name" : "Fuel runs out"
                    },
                    {
                        "datetime" : "new Date(2015, 04, 18, 00, 00, 00)",
                        "name" : "Poco RF End"
                    },
                    {
                        "datetime" : "new Date(2015, 04, 19, 00, 00, 00)",
                        "name" : "Stick RF End"
                    }, 
                    {
                        "datetime" : "new Date(2015, 04, 20, 00, 00, 00)",
                        "name" : "Corp sleeper op"
                    }
                ];

}]);