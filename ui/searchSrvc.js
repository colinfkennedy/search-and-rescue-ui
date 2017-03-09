angular.module('searchAndRescueApp')
  .service('searchService', searchService);

searchService.$inject = ['$http'];

function searchService($http) {
  this.makeSearchRequest = function () {
    console.log("Making get request to api search");
    return $http.get('/api/search');
  };
}
