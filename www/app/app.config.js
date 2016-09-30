(function(angular) {

    angular.module("clips")
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/coupons', {
                    templateUrl: 'app/coupons/main.html',
                    controller: 'CouponsController'}).
                when('/businesses', {
                    templateUrl: "app/businesses/main.html",
                    controller: "BusinessesController"
                }).
                when('/coupons/:couponId', {
                    templateUrl: 'app/coupons/detail.html',
                    controller: 'CouponsDetailController'
                }).
                otherwise({
                    redirectTo: '/coupons'
                });

        }]);


}(angular));