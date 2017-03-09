'use strict';

angular.module('searchAndRescueApp')
  .controller('searchCtrl', searchCtrl);

searchCtrl.$inject = ['$scope', '$timeout', 'searchService', '$q'];

function searchCtrl($scope, $timeout, reportService) {

  let vm = this;
  let icons = {
    SUCCESS: 'leaf',
    FAILURE: 'fire',
    RUNNING: 'dashboard',
    ABORTED: 'ban-circle',
    UNSTABLE: 'remove-circle'
  };

  $scope.pipelines = [];

  vm.getIcon = function(pipeline) {
    let status = vm.getStatus(pipeline);
    return icons[status] || 'question-sign';
  };

  vm.getDuration = function(duration) {
    return moment.duration(duration).humanize();
  };

  vm.getStatus = function(pipeline) {
    if (pipeline.status === null) return 'RUNNING';
    return pipeline.status;
  };

  vm.isInProgress = function(pipeline) {
    return vm.getStatus(pipeline) === 'RUNNING';
  };

  vm.getStatusClass = function(pipeline) {
    return vm.getStatus(pipeline).toLowerCase();
  };

  vm.getVersion = function(pipeline, env) {
    return _.find(pipeline.deployedVersions, { env: env }).version;
  };
}
