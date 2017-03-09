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
  };

  vm.executeSearch = function (searchQuery) {
    console.log("Calling search service with term: ", searchQuery);
    searchService.makeSearchRequest(searchQuery).then(function (response) {
      console.log("Request returned, adding to searchResults", response);
      $scope.searchResults = response.data;
      $scope.showSearchResults = true;
      $scope.segmentsData = [
        {
          "segmentId": "20088653",
          "segmentName": "AOP_Yahoo!BP_Female - 684134"
        },
        {
          "segmentId": "20268846",
          "segmentName": "7day - verizon_fake_lb - 1497635"
        },
        {
          "segmentId": "20098510",
          "segmentName": "RegisterSeekFemale - MatchDemo_Status - 347182"
        },
        {
          "segmentId": "20105419",
          "segmentName": "Verizon_Logo - 994354"
        },
        {
          "segmentId": "20268845",
          "segmentName": "365day - verizon_fake_lb - 1497636"
        },
        {
          "segmentId": "20106026",
          "segmentName": "Verizon_Fios_mobileRT_1day - 965781"
        },
        {
          "segmentId": "20181652",
          "segmentName": "Female_7days - 1454830"
        },
        {
          "segmentId": "20096054",
          "segmentName": "VerizonWireless_Remarketing - 573441"
        },
        {
          "segmentId": "20101845",
          "segmentName": "female_seeking_male - MTCH_SRCH_CS - 370628"
        },
        {
          "segmentId": "20107204",
          "segmentName": "Bidtellect_VerizonFios_Convert - 987087"
        }
      ]
    });
  }
}
