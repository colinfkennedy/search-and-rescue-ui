'use strict';

angular.module('searchAndRescueApp')
  .controller('searchCtrl', searchController);

searchController.$inject = ['$scope', '$timeout', 'searchService'];

function searchController($scope, $timeout, searchService) {

  let vm = this;
  $scope.searchQuery = '';

  vm.onSearchBoxKeyPress = function ($event, searchQuery) {
    if ($event.keyCode === 13) { // ENTER
      console.log("Enter key pressed");
      vm.executeSearch(searchQuery);
    }
  };

  vm.destroyGraphs = function () {
    $scope.pieChart.destroy();
    $scope.lineChart.destroy();
    $scope.barChart.destroy();
    $scope.radarChart.destroy();
  };

  vm.createGraphs = function () {
    vm.createPieChart();
    vm.createLineChart();
    vm.createBarChart();
    vm.createRadarChart();
  };

  vm.executeSearch = function (searchQuery) {
    console.log("Calling search service with term: ", searchQuery);
    $scope.showLoadingSpinner = true;
    searchService.makeSearchRequest(searchQuery).then(function (response) {
      console.log("Request returned, adding to searchResults", response);
      $scope.searchResults = response.data;
      $scope.showDetailView = false;
      $scope.showSearchResults = true;
      $scope.resultsPaneShowing = true;
      $scope.segmentsData = response.data.data.segments;
      $scope.sentence = response.data.data.processedSentence;
      $scope.showLoadingSpinner = false;
    });
  };

  vm.showDetailView = function (rowIndex) {
    $scope.detailSegmentViewName = $scope.segmentsData[rowIndex].segmentLongName;
    $scope.showDetailView = true;
    $scope.showSearchResults = false;
    $timeout(vm.createGraphs, 0);
  };

  vm.closeDetailView = function () {
    $scope.showDetailView = false;
    $scope.showSearchResults = true;
    vm.destroyGraphs();
  };

  vm.createPieChart = function() {
    let pieChartNode = $("#pieChart");
    $scope.pieChart = new Chart(pieChartNode, {
      type: 'pie',
      data: {
        labels: [
          "Desktop",
          "Mobile"
        ],
        datasets: [
          {
            data: [300, 700],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ]
          }]
      },
      options: {
        animation: {
          animateScale: true
        },
        responsive: true,
        title: {
          display: true,
          text: 'Inventory Availability'
        }
      }
    });
  };

  vm.createLineChart = function() {
    let lineChartNode = $("#lineChart");
    $scope.lineChart = new Chart(lineChartNode, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Revenue",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [20, 59, 65, 78, 72, 85, 90],
            spanGaps: false,
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Revenue Trend'
        }
      }
    });
  };

  vm.createBarChart = function() {
    let barChartNode = $("#barChart");
    $scope.barChart = new Chart(barChartNode, {
      type: 'horizontalBar',
      data: {
        labels: ["GM Amnet", "Best Buy", "Progressive", "Statefarm"],
        datasets: [{
          label: 'Campaign Revenue $M',
          data: [12, 19, 3, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        responsive: true,
        title: {
          display: true,
          text: 'Recent Customers'
        }
      }
    });
  };

  vm.createRadarChart = function() {
    let radarChartNode = $("#radarChart");
    $scope.radarChart = new Chart(radarChartNode, {
      type: 'radar',
      data: {
        labels: ["Click", "Conversion", "Video Complete", "Impression", "Something Else", "Other", "Thing"],
        datasets: [
          {
            label: "Mobile",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "Desktop",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Estimate Cost Per'
        }
      }
    });
  };
}
