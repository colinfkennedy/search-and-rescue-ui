angular.module('searchAndRescueApp')
  .service('searchService', searchService);

searchService.$inject = ['$http'];

function searchService($http) {
  this.getStatus = function () {
    return $http.get('/api/pipeline/status');
  };

  this.getHealthCheck = function () {
    return $http.get('/api/healthcheck/status');
  }
}
