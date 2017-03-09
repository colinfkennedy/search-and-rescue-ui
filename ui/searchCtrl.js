'use strict';

angular.module('searchAndRescueApp')
  .controller('searchCtrl', searchController);

searchController.$inject = ['$scope', 'searchService'];

function searchController($scope, searchService) {
                           
  let vm = this;
  $scope.searchQuery = '';
  
  vm.onSearchBoxKeyPress = function($event, searchQuery) {
    if ($event.keyCode === 13) { // ENTER
      console.log("Enter key pressed");
      vm.executeSearch(searchQuery);
    }
  }

  vm.executeSearch = function (searchQuery) {
    console.log("Calling search service with term: ", searchQuery);
    searchService.makeSearchRequest(searchQuery).then(function (response) {
      console.log("Request returned, adding to searchResults", response);
      $scope.searchResults = response.data;
    });
  }
};
