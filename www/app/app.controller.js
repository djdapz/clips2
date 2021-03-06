/* recommended */
var AppController = function($scope, $location, NavBarService){

    $scope.test = 'test text';
    $scope.activeTabIndex = 0;
    $scope.activeTabName = "coupons";

    $scope.back = {
        coupons: false,
        businesses: false
    };

    $scope.tabs = [
        {
            text: 'Coupons',
            link: '#coupons',
            default_link: "#coupons",
            class: 'passive',
            glyph: "glyphicon glyphicon-piggy-bank",
            index: 0
        },
        {
            text: 'Businesses',
            link: '#businesses',
            default_link: "#businesses",
            class: 'passive',
            glyph: "glyphicon glyphicon-shopping-cart",
            index: 1
        }
    ];

    var refreshNavBar = function(){
        var value = NavBarService.getPathStack($scope.activeTabName);
        var next = NavBarService.getNextLocation($scope.activeTabName);
        $scope.pathStack = value;
        if(value.length == 0){
            $scope.back[$scope.activeTabName] = false;
            $scope.tabs[$scope.activeTabIndex].link = $scope.tabs[$scope.activeTabIndex].default_link;
        }else{
            $scope.tabs[$scope.activeTabIndex].link = next;
            $scope.back[$scope.activeTabName] = true;
        }
    }

    $scope.goBack = function(){
        $location.path(NavBarService.pathStackPop($scope.activeTabName));
    }

    NavBarService.registerObserverCallback(refreshNavBar);


    var init = function(){
        $scope.tabs[$scope.activeTabIndex].class = 'active';
    };

    $scope.changeTabs = function(tabIndex){
        $scope.tabs[$scope.activeTabIndex].class = 'passive';
        $scope.tabs[tabIndex].class = 'active';
        $scope.activeTabIndex = tabIndex;
        $scope.activeTabName = $scope.tabs[tabIndex].text.toLowerCase();
    };

    init();
};


angular
    .module('clips')
    .controller("AppController", AppController);

AppController.$inject = ['$scope', "$location", "NavBarService"];
