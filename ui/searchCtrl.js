'use strict';

angular.module('searchAndRescueApp')
  .controller('searchCtrl', searchController);

searchController.$inject = ['$scope', 'searchService'];

function searchController($scope, searchService) {
  $scope.filterOptions = [{
      name: 'name',
      format: 'string',
      options: {
        placeholder: 'Custom Placeholder'
      }
    },
      {
        name: 'colin',
        format: 'string',
        options: {
          placeholder: 'Colin'
        }
      },
      {
        name: 'favNum',
        displayName: 'Favorite Number',
        format: 'number',
        options: {
          placeholder: 'Favorite Number'
        }
      },
      {
        name: 'age',
        format: 'relational',
        options: {
          modifierConfig: { //If not specified, include all conditions: ['<', '>', '=', '!=']
            showGreaterThan: true,
            showLessThan: true,
            showEquals: true
          }
        }
      },
      {
        name: 'birthday',
        format: 'date'
      },
      {
        name: 'status',
        format: 'select',
        options: {
          items: [
            {label: 'Enabled', value: 'ENABLED'},
            {label: 'Disabled', value: 'DISABLED'},
            {label: 'Deleted', value: 'DELETED'},
            {label: 'Hidden', value: 'HIDDEN'}
          ]
        }
      },
      {
        name: 'multiStatus',
        displayName: 'Multiple Status',
        format: 'select',
        options: {
          multiselect: true,
          items: [
            {label: 'Enabled', value: 'ENABLED'},
            {label: 'Disabled', value: 'DISABLED'},
            {label: 'Deleted', value: 'DELETED'},
            {label: 'Hidden', value: 'HIDDEN'}
          ]
        }
      },
      {
        name: 'advertisers',
        format: 'list',
        options: {
          items: [
            {label: '21st century', value: 1000},
            {label: '3M', value: 1001},
            {label: '5 Takes', value: 1002},
            {label: 'AFA', value: 1003},
            {label: 'Air New Zealand', value: 1004},
            {label: 'Alamo Rental Car', value: 1005},
            {label: 'American Greetings', value: 1006},
            {label: 'American Legacy Foundation', value: 1007},
            {label: 'Adaptv', value: 1008},
            {label: 'Microsoft', value: 1009},
            {label: 'Aol', value: 1010},
            {label: 'Verizon', value: 1011},
            {label: '19th century', value: 1012},
            {label: '4M', value: 1013},
            {label: 'Bloomberg', value: 1014},
            {label: 'GAP', value: 1015},
            {label: 'CocaCola', value: 1016},
            {label: 'ABC', value: 1017},
            {label: 'NBC', value: 1018},
            {label: 'CNN', value: 1019},
            {label: 'BlackBird', value: 1020},
            {label: 'Blue', value: 1021},
            {label: 'NoClue', value: 1022},
            {label: 'BazeMoore', value: 1023},
            {label: 'Spice', value: 1024},
            {label: 'GermanMakes', value: 1025},
            {label: 'Mercedes', value: 1026},
            {label: 'Toyota', value: 1027},
            {label: 'Vauxhall', value: 1028},
            {label: 'Whalemo', value: 1029},
            {label: 'Trusty', value: 1030},
            {label: 'Wigmo', value: 1031},
            {label: 'BlackCat', value: 1032},
            {label: 'Lan&Cost', value: 1033},
            {label: 'Cannes', value: 1034},
            {label: 'Dell', value: 1035}
          ],
          visiblelimit: 100,
          multiselect: true
        }
      },
      {
        name: 'active',
        format: 'boolean'
      }];

    $scope.selectedMatch = 'sfsd';

    $scope.filterChanged = function () {
    };

    $scope.filterObject = {};

    $scope.sampleData = [{
      '_id': '5602bb6bae7329f39c5a18ac',
      'index': 25,
      'guid': '551ec8e0-bc99-4f81-9a9b-08ced9806b80',
      'active': true,
      'balance': 1788.39,
      'picture': 'http://placehold.it/32x32',
      'histogram': 'images/grid/grid-graph-mock.svg',
      'age': 26,
      'eyeColor': 'green',
      'name': 'Ratliff Landry',
      'gender': 'male',
      'company': 'CANDECOR',
      'email': 'ratlifflandry@candecor.com',
      'phone': '+1 (930) 566-3290',
      'address': '665 Maujer Street, Abiquiu, Arizona, 8302',
      'registered': '2015-07-03T03:14:32 +04:00',
      'latitude': 51.387542,
      'longitude': -41.826627,
      'favoriteFruit': 'apple'
    },
      {
        '_id': '5602bb6b7c1b1364ce9609de',
        'index': 26,
        'guid': '1b51e6a7-ab53-4372-8107-ac84970b2edd',
        'active': false,
        'balance': 3483.88,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 22,
        'eyeColor': 'blue',
        'name': 'Mcclure Hyde',
        'gender': 'male',
        'company': 'INTRAWEAR',
        'email': 'mcclurehyde@intrawear.com',
        'phone': '+1 (825) 439-2384',
        'address': '944 Wyckoff Street, Fillmore, Iowa, 7614',
        'registered': '2014-11-28T07:10:06 +05:00',
        'latitude': 51.094546,
        'longitude': 126.726691,
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5602bb6bff2b3934005f0f9f',
        'index': 27,
        'guid': '424e1793-bc20-46c4-9d7c-71cd46e2e617',
        'active': false,
        'balance': 2926.63,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 22,
        'eyeColor': 'brown',
        'name': 'Noreen Gillespie',
        'gender': 'female',
        'company': 'DIGIGEN',
        'email': 'noreengillespie@digigen.com',
        'phone': '+1 (857) 436-3577',
        'address': '791 Schenectady Avenue, Greenbush, Vermont, 3862',
        'registered': '2014-11-27T06:53:33 +05:00',
        'latitude': 52.636654,
        'longitude': -11.971877,
        'favoriteFruit': 'banana'
      },
      {
        '_id': '5602bb6b9a369a8054c56251',
        'index': 28,
        'guid': '9c14cae8-8d32-4e1f-903a-b9266ae0c284',
        'active': true,
        'balance': 3184.71,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 22,
        'eyeColor': 'green',
        'name': 'Durham Huber',
        'gender': 'male',
        'company': 'ZISIS',
        'email': 'durhamhuber@zisis.com',
        'phone': '+1 (997) 541-2882',
        'address': '411 Cox Place, Stollings, Nevada, 6071',
        'registered': '2014-07-27T10:11:42 +04:00',
        'latitude': -19.610279,
        'longitude': 94.501915,
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5602bb6bfc7850cff5a020c7',
        'index': 29,
        'guid': '08bd06d0-2cc3-4dfe-a4d5-a9bfb24c1a0c',
        'active': true,
        'balance': 1780.79,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 33,
        'eyeColor': 'green',
        'name': 'Sheri Mcclain',
        'gender': 'female',
        'company': 'CYTRAK',
        'email': 'sherimcclain@cytrak.com',
        'phone': '+1 (909) 519-3040',
        'address': '899 Canda Avenue, Hoagland, North Dakota, 6990',
        'registered': '2014-06-28T09:17:20 +04:00',
        'latitude': -63.445034,
        'longitude': 143.721042,
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5602bb6b4c11868642cce180',
        'index': 30,
        'guid': '72aaf966-8e56-4285-a703-49da4888fe1f',
        'active': false,
        'balance': 2124.38,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 28,
        'eyeColor': 'blue',
        'name': 'Katy Frederick',
        'gender': 'female',
        'company': 'FURNITECH',
        'email': 'katyfrederick@furnitech.com',
        'phone': '+1 (938) 504-3360',
        'address': '155 Bergen Place, Cliffside, Guam, 194',
        'registered': '2014-06-01T03:40:05 +04:00',
        'latitude': 53.884995,
        'longitude': -75.24984,
        'favoriteFruit': 'banana'
      },
      {
        '_id': '5602bb6b5a820b0ad9555434',
        'index': 31,
        'guid': '907a73ef-4d8a-4689-beaf-b32ea1f2fd11',
        'active': true,
        'balance': 3232.94,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 21,
        'eyeColor': 'blue',
        'name': 'Ashlee Blevins',
        'gender': 'female',
        'company': 'PROVIDCO',
        'email': 'ashleeblevins@providco.com',
        'phone': '+1 (917) 402-3079',
        'address': '484 Montauk Court, Farmington, Nebraska, 5009',
        'registered': '2014-03-12T05:50:08 +04:00',
        'latitude': 77.898417,
        'longitude': 34.041754,
        'favoriteFruit': 'apple'
      },
      {
        '_id': '5602bb6b3fbe9fad9551424a',
        'index': 32,
        'guid': 'ad8529d3-12f3-44ae-a273-7ad390ed9c0e',
        'active': false,
        'balance': 2641.79,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 23,
        'eyeColor': 'blue',
        'name': 'Mitchell Espinoza',
        'gender': 'male',
        'company': 'MOMENTIA',
        'email': 'mitchellespinoza@momentia.com',
        'phone': '+1 (910) 546-2684',
        'address': '256 Moffat Street, Shaft, Pennsylvania, 8412',
        'registered': '2014-10-29T04:55:28 +04:00',
        'latitude': 66.184601,
        'longitude': 36.396312,
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5602bb6b64aed97a135f40d0',
        'index': 33,
        'guid': 'e65d0b6b-ac7e-47e9-802d-c00183a0208b',
        'active': true,
        'balance': 1324.65,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 27,
        'eyeColor': 'brown',
        'name': 'Colon Gill',
        'gender': 'male',
        'company': 'ORBIN',
        'email': 'colongill@orbin.com',
        'phone': '+1 (863) 584-3942',
        'address': '193 Johnson Avenue, Wanamie, Oregon, 130',
        'registered': '2014-02-02T01:41:24 +05:00',
        'latitude': -41.687768,
        'longitude': -169.576066,
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5602bb6bf201f410cb5bb718',
        'index': 34,
        'guid': 'aae58973-533d-4493-9ba1-5db53314c0a5',
        'active': true,
        'balance': 3520.82,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 26,
        'eyeColor': 'blue',
        'name': 'Angelina Goodwin',
        'gender': 'female',
        'company': 'SUSTENZA',
        'email': 'angelinagoodwin@sustenza.com',
        'phone': '+1 (806) 553-3562',
        'address': '680 Furman Street, Bluetown, New York, 9179',
        'registered': '2014-12-11T01:49:10 +05:00',
        'latitude': -57.360159,
        'longitude': -52.77027,
        'favoriteFruit': 'apple'
      },
      {
        '_id': '5602bb6b90cb78ced74a4178',
        'index': 35,
        'guid': '44da5c60-1cfe-4d89-bd57-5ae77f550ac3',
        'active': false,
        'balance': 1850.77,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 22,
        'eyeColor': 'blue',
        'name': 'Julia Cummings',
        'gender': 'female',
        'company': 'NETAGY',
        'email': 'juliacummings@netagy.com',
        'phone': '+1 (848) 532-2616',
        'address': '524 Plaza Street, Manchester, Federated States Of Micronesia, 5482',
        'registered': '2014-05-30T03:30:29 +04:00',
        'latitude': -9.530111,
        'longitude': -31.439276,
        'favoriteFruit': 'banana'
      },
      {
        '_id': '5602bb6b54ffca84716b0c9f',
        'index': 36,
        'guid': '1da07a96-714c-469f-a09e-8f70e816d417',
        'active': true,
        'balance': 3590.28,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 32,
        'eyeColor': 'green',
        'name': 'Melva Cortez',
        'gender': 'female',
        'company': 'DIGIRANG',
        'email': 'melvacortez@digirang.com',
        'phone': '+1 (912) 513-3512',
        'address': '484 Tompkins Place, Waterloo, Texas, 5080',
        'registered': '2014-01-26T08:14:59 +05:00',
        'latitude': 52.89268,
        'longitude': 150.924189,
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5602bb6b135f31a06ac0a08e',
        'index': 37,
        'guid': '13e8dac2-0d46-4df1-be9c-08d8fbc2d26a',
        'active': true,
        'balance': 2421.56,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 33,
        'eyeColor': 'green',
        'name': 'Tracie Pearson',
        'gender': 'female',
        'company': 'INTERFIND',
        'email': 'traciepearson@interfind.com',
        'phone': '+1 (827) 515-3495',
        'address': '942 Highland Avenue, Cleary, Alaska, 3755',
        'registered': '2014-09-18T12:56:06 +04:00',
        'latitude': -46.449828,
        'longitude': -53.117254,
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5602bb6bd23ccf367ae430f0',
        'index': 38,
        'guid': '11f0e769-5789-4710-bec0-2ccfa784dc4d',
        'active': false,
        'balance': 1289.91,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 29,
        'eyeColor': 'blue',
        'name': 'Earlene Snider',
        'gender': 'female',
        'company': 'FUELWORKS',
        'email': 'earlenesnider@fuelworks.com',
        'phone': '+1 (863) 518-2558',
        'address': '467 Wilson Avenue, Fostoria, Michigan, 9060',
        'registered': '2014-09-19T03:29:47 +04:00',
        'latitude': -85.015179,
        'longitude': -117.164116,
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5602bb6b53e02b4a612fab83',
        'index': 39,
        'guid': '1dd9b803-eb4a-4572-b1ce-18b7b091ee1f',
        'active': true,
        'balance': 2425.08,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 36,
        'eyeColor': 'brown',
        'name': 'Malone Patton',
        'gender': 'male',
        'company': 'XINWARE',
        'email': 'malonepatton@xinware.com',
        'phone': '+1 (899) 567-3708',
        'address': '385 Conway Street, Coaldale, California, 3521',
        'registered': '2015-02-07T01:31:14 +05:00',
        'latitude': -13.829799,
        'longitude': 69.001792,
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5602bb6b78fb92383bab5e6d',
        'index': 0,
        'guid': 'c84cdc7f-8863-4547-a8a9-c9d640c950c5',
        'active': true,
        'balance': 1948.41,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 22,
        'eyeColor': 'blue',
        'name': 'Patricia Ewing',
        'gender': 'female',
        'company': 'GAZAK',
        'email': 'patriciaewing@gazak.com',
        'phone': '+1 (815) 513-3892',
        'address': '634 Rost Place, Onton, Colorado, 4087',
        'registered': '2014-01-16T05:02:37 +05:00',
        'latitude': -77.555053,
        'longitude': 20.55102,
        'favoriteFruit': 'apple'
      },
      {
        '_id': '5602bb6b2554132272f17948',
        'index': 1,
        'guid': 'a852ea40-c971-4658-946f-9754d38dca01',
        'active': false,
        'balance': 2210.48,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 40,
        'eyeColor': 'blue',
        'name': 'Tonya Reed',
        'gender': 'female',
        'company': 'TELLIFLY',
        'email': 'tonyareed@tellifly.com',
        'phone': '+1 (997) 595-2885',
        'address': '534 Mayfair Drive, Libertytown, Delaware, 9140',
        'registered': '2014-02-15T11:47:28 +05:00',
        'latitude': -40.569171,
        'longitude': -78.511968,
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5602bb6bfb1d813c3e05d71a',
        'index': 2,
        'guid': 'a045aab3-a6bb-45a6-b55f-b24550950322',
        'active': true,
        'balance': 3683.61,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 32,
        'eyeColor': 'green',
        'name': 'Hood Tran',
        'gender': 'male',
        'company': 'STROZEN',
        'email': 'hoodtran@strozen.com',
        'phone': '+1 (953) 553-3872',
        'address': '569 Poplar Street, Drytown, Maine, 6031',
        'registered': '2015-04-16T06:09:17 +04:00',
        'latitude': 34.11752,
        'longitude': -28.497708,
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5602bb6b71edb5123fe1ee07',
        'index': 9,
        'guid': '374a72c6-6419-4ac0-9600-523dc774dd0b',
        'active': false,
        'balance': 2554.39,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 37,
        'eyeColor': 'blue',
        'name': 'Burris Conrad',
        'gender': 'male',
        'company': 'ARTWORLDS',
        'email': 'burrisconrad@artworlds.com',
        'phone': '+1 (973) 536-3048',
        'address': '140 Wythe Place, Darlington, South Carolina, 4145',
        'registered': '2014-08-05T02:55:16 +04:00',
        'latitude': -82.372135,
        'longitude': -147.114706,
        'favoriteFruit': 'strawberry'
      },
      {
        '_id': '5602bb6bb66228d8def17802',
        'index': 10,
        'guid': '4582e71e-0e4a-4809-993e-926c6f97d047',
        'active': false,
        'balance': 3287.32,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 36,
        'eyeColor': 'green',
        'name': 'Salinas Welch',
        'gender': 'male',
        'company': 'EMTRAC',
        'email': 'salinaswelch@emtrac.com',
        'phone': '+1 (822) 473-3026',
        'address': '235 Rockwell Place, Coventry, Hawaii, 1165',
        'registered': '2014-10-01T07:00:16 +04:00',
        'latitude': -39.637197,
        'longitude': 52.503472,
        'favoriteFruit': 'banana'
      },
      {
        '_id': '5602bb6baca8e76cde4c3e2c',
        'index': 11,
        'guid': 'ee0f298e-da7e-450f-9b99-483aff04e334',
        'active': false,
        'balance': 1645.85,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 27,
        'eyeColor': 'blue',
        'name': 'Nichols Mcfarland',
        'gender': 'male',
        'company': 'CYCLONICA',
        'email': 'nicholsmcfarland@cyclonica.com',
        'phone': '+1 (804) 437-3962',
        'address': '464 Pershing Loop, Albrightsville, West Virginia, 1100',
        'registered': '2014-05-10T12:36:43 +04:00',
        'latitude': 50.8846,
        'longitude': 127.685451,
        'favoriteFruit': 'apple'
      },
      {
        '_id': '5602bb6bde55fe1b91842bd0',
        'index': 12,
        'guid': '6110386a-e2e7-45bc-8bfa-41af8bfe846e',
        'active': true,
        'balance': 1045.70,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 36,
        'eyeColor': 'green',
        'name': 'Stevens Vega',
        'gender': 'male',
        'company': 'ACCUPHARM',
        'email': 'stevensvega@accupharm.com',
        'phone': '+1 (805) 435-3649',
        'address': '788 Gunther Place, Glidden, Virgin Islands, 2002',
        'registered': '2015-08-04T08:33:28 +04:00',
        'latitude': -45.199031,
        'longitude': 61.124025,
        'favoriteFruit': 'apple'
      },
      {
        '_id': '5602bb6b91755ab5333a0920',
        'index': 13,
        'guid': '5fd5db9e-aaf8-4598-976c-e73d1506aefb',
        'active': false,
        'balance': 3151.16,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 25,
        'eyeColor': 'green',
        'name': 'Claudine Key',
        'gender': 'female',
        'company': 'DYNO',
        'email': 'claudinekey@dyno.com',
        'phone': '+1 (896) 477-2680',
        'address': '720 Garden Place, Titanic, Louisiana, 3679',
        'registered': '2015-08-30T02:26:16 +04:00',
        'latitude': 56.134216,
        'longitude': 111.496769,
        'favoriteFruit': 'apple'
      },
      {
        '_id': '5602bb6bfdcd266b0d09650f',
        'index': 14,
        'guid': 'f56ce160-0f7f-4d8c-9e6e-b4cf179789ef',
        'active': false,
        'balance': 3170.88,
        'picture': 'http://placehold.it/32x32',
        'histogram': 'images/grid/grid-graph-mock.svg',
        'age': 39,
        'eyeColor': 'brown',
        'name': 'Madge Dunn',
        'gender': 'female',
        'company': 'MAGMINA',
        'email': 'madgedunn@magmina.com',
        'phone': '+1 (890) 494-3971',
        'address': '835 Durland Place, Weedville, Maryland, 4400',
        'registered': '2015-06-21T07:43:28 +04:00',
        'latitude': 60.233224,
        'longitude': 9.784972,
        'favoriteFruit': 'apple'
      }];

    $scope.searchMatcher = function (searchTerm) {
      if (!searchTerm) {
        return [];
      }
      var sortedDataItems = [];

      console.log("Calling search service");
      searchService.makeSearchRequest().then(function (response) {
        console.log("Request returned, adding to searchResults", response);
        $scope.searchResults = response.data;
        sortedDataItems.push(response.data);
      });

      // sortedDataItems.push({
      //   key: 'keyword',
      //   value: searchTerm
      // });
      //
      // for (var i = 0; i < $scope.sampleData.length; i++) {
      //   var item = $scope.sampleData[i];
      //   var keys = Object.keys(item);
      //
      //   for (var k = 0; k < keys.length; k++) {
      //     var key = keys[k];
      //     var value = item[key];
      //     if ((String(value)).toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
      //       var result = {};
      //       result[key] = value;
      //       sortedDataItems.push(result);
      //     }
      //   }
      // }

      return sortedDataItems;
    };
};
