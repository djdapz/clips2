angular.module('clips.coupons', []);
angular.module('clips.businesses', []);


angular.module('clips', ['supersonic',
                          'ngRoute',
                          'clips.coupons',
                          'clips.businesses'
])
.controller('IndexController', function($scope, supersonic) {

  $scope.navbarTitle = "hoopla hello";
});
