/* recommended */
var AppController = function($scope){

    $scope.test = 'test text';
    $scope.activeTabIndex = 0;

    $scope.tabs = [
        {
            text: 'Coupons',
            link: '#coupons',
            class: 'passive',
            index: 0
        },
        {
            text: 'Businesses',
            link: '#businesses',
            class: 'passive',
            glyph: "glyphicon glyphicon-search",
            index: 1
        }
    ];

    var init = function(){
        $scope.tabs[$scope.activeTabIndex].class = 'active';
    };

    $scope.changeTabs = function(tabIndex){
        $scope.tabs[$scope.activeTabIndex].class = 'passive';
        $scope.tabs[tabIndex].class = 'active';

        $scope.activeTabIndex = tabIndex;
    };


    init();
};


angular
    .module('clips')
    .controller("AppController", AppController);

AppController.$inject = ['$scope'];

