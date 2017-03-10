'use strict';

// Declare app level module which depends on views, and components
angular.module('searchAndRescueApp', [
    'ngRoute'
  ])
  .config(applicationBootstrap);

applicationBootstrap.$inject = ['$locationProvider', '$routeProvider'];

function applicationBootstrap($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('/', {
      templateUrl: 'search.html',
      controller: 'searchCtrl',
      controllerAs: 'vm'
    });

  $routeProvider
    .when('/bear-shark', {
      templateUrl: 'bearshark.html'
    });
}
