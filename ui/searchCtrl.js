'use strict';

angular.module('searchAndRescueApp')
  .controller('searchCtrl', searchController);

searchController.$inject = ['$scope', 'searchService'];

function searchController($scope, searchService) {

  let vm = this;
  $scope.searchQuery = '';

  vm.onSearchBoxKeyPress = function ($event, searchQuery) {
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
  };

  vm.showDetailView = function () {
    $scope.showDetailView = true;
    $scope.showSearchResults = false;
    $scope.hideSearchBox = true;
  };

  let pieChartNode = $("#pieChart");
  let myPieChart = new Chart(pieChartNode, {
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

  let lineChartNode = $("#lineChart");
  let lineChart = new Chart(lineChartNode, {
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

  let barChartNode = $("#barChart");
  let barChart = new Chart(barChartNode, {
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
            beginAtZero:true
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

  let radarChartNode = $("#radarChart");
  let radarChart = new Chart(radarChartNode, {
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
}
