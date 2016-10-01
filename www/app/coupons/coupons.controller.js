/* recommended */
var CouponsController = function($scope, $http, NavBarService){

    $scope.navbarTitle = "i have 10 coupons";
    $scope.error = undefined;
    $scope.waiting = true;

    $http({
        method: "GET",
        url: "https://eecs394-clips-backend.herokuapp.com/coupon/all"
    }).then(
        function successCallback(response){
            $scope.coupons = response.data;
            $scope.waiting = false;
        }, function errorCallback(error){
            console.log(error);
            $scope.error = error;
            $scope.waiting = false;
        }
    );
    $scope.goTo = function(id){
        NavBarService.pathStackPush('coupons', '#coupons', "#coupons/"+id)
    }


    $scope.coupons = [
        {
            business_name: "Tommy Nevins Pub",
            deal_text: "$6 Pitchers",
            start: "Thursday 6:00 PM",
            end: "Thursday 3:00 AM",
            image_link: "http://weknowyourdreams.com/images/beer/beer-01.jpg"
        },
        {
            business_name: "Noodles & Company",
            deal_text: "Buy One Get One",
            start: "Wednesday 11:00 AM",
            end: "Wednesday 2:00 PM",
            image_link: "http://weknowyourdreams.com/images/beer/beer-01.jpg"
        },
        {
            business_name: "Tommy Nevins Pub",
            deal_text: "$6 Pitchers",
            start: "Thursday 6:00 PM",
            end: "Thursday 3:00 AM",
            image_link: "http://weknowyourdreams.com/images/beer/beer-01.jpg"
        },
        {
            business_name: "Noodles & Company",
            deal_text: "Buy One Get One",
            start: "Wednesday 11:00 AM",
            end: "Wednesday 2:00 PM",
            image_link: "http://weknowyourdreams.com/images/beer/beer-01.jpg"
        },
        {
            business_name: "Tommy Nevins Pub",
            deal_text: "$6 Pitchers",
            start: "Thursday 6:00 PM",
            end: "Thursday 3:00 AM",
            image_link: "http://weknowyourdreams.com/images/beer/beer-01.jpg"
        },
        {
            business_name: "Noodles & Company",
            deal_text: "Buy One Get One",
            start: "Wednesday 11:00 AM",
            end: "Wednesday 2:00 PM",
            image_link: "http://weknowyourdreams.com/images/beer/beer-01.jpg"
        },
        {
            business_name: "Tommy Nevins Pub",
            deal_text: "$6 Pitchers",
            start: "Thursday 6:00 PM",
            end: "Thursday 3:00 AM",
            image_link: "http://weknowyourdreams.com/images/beer/beer-01.jpg"
        },
        {
            business_name: "Noodles & Company",
            deal_text: "Buy One Get One",
            start: "Wednesday 11:00 AM",
            end: "Wednesday 2:00 PM",
            image_link: "http://weknowyourdreams.com/images/beer/beer-01.jpg"
        },
        {
            business_name: "Tommy Nevins Pub",
            deal_text: "$6 Pitchers",
            start: "Thursday 6:00 PM",
            end: "Thursday 3:00 AM",
            image_link: "http://weknowyourdreams.com/images/beer/beer-01.jpg"
        },
        {
            business_name: "Noodles & Company",
            deal_text: "Buy One Get One",
            start: "Wednesday 11:00 AM",
            end: "Wednesday 2:00 PM",
            image_link: "http://weknowyourdreams.com/images/beer/beer-01.jpg"
        }
    ]

};


angular
    .module('clips.coupons')
    .controller("CouponsController", CouponsController);

CouponsController.$inject = ['$scope', '$http', "NavBarService"];
