angular.module('searchAndRescueApp')
  .service('searchService', searchService);

searchService.$inject = ['$http'];

function searchService($http) {
  this.makeSearchRequest = function (searchQuery) {
    var data = {
      searchQuery: searchQuery
    };
    console.log("Making get request to api search with  data: ", data);
    return $http.post('/api/search', data);
  };
}
