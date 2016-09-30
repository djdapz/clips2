/* recommended */
var BusinessesController = function($scope){

    $scope.navbarTitle = "i have 10 coupons";

};


angular
    .module('clips.businesses')
    .controller("BusinessesController", BusinessesController);

BusinessesController.$inject = ['$scope'];

