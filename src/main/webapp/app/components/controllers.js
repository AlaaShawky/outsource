/*
 * Place your global Controllers in this file
 */

angular.module('myApp.controllers', []).
        controller('AppCtrl', function () {

        })
        .controller('ShopCtrl', function ($scope, $location, $uibModal, ShopService, selectedShopFac, googleFactory) {
            $scope.shops = [
                {
                    "id": 123,
                    "name": "morten@nativenodrth.dk",
                    "street": "Elmegadevejallegade hej",
                    "housenumber": "3",
                    "phone": "42950800",
                    "website": "NA",
                    "cityInfo": {
                        "zipCode": "2200",
                        "city": "København N"
                    },
                    "dayNullOpen": 0,
                    "dayNullClose": 0,
                    "dayOneOpen": 0,
                    "dayOneClose": 0,
                    "dayTwoOpen": 0,
                    "dayTwoClose": 0,
                    "dayThreeOpen": 0,
                    "dayThreeClose": 0,
                    "dayFourOpen": 0,
                    "dayFourClose": 0,
                    "dayFiveOpen": 0,
                    "dayFiveClose": 0,
                    "daySixOpen": 0,
                    "daySixClose": 0,
                    "x": 55.0,
                    "y": 25.0,
                    "angle": 62.0
                },
                {
                    "id": 126,
                    "name": "VINTRO",
                    "street": "Ravnsborggade",
                    "phone": "51220002",
                    "email": "shop@vintrovin.dk",
                    "website": "www.vintrovin.dk",
                    "category": "WINE",
                    "description": "VINTRO er en nysgerrig vinbutik som ønsker at styrke og sætte fokus på denne glemte biodiversitet. Derfor vil der hver uge, blive præsenteret en ny drue her på siden. Kan du ikke vente med at se hvilken drue der kommer på næste gang, så kom ned i butikken, Ravnsborggade 5 på Nørrebro, og se hele sortimentet.",
                    "cityInfo": {
                        "zipCode": "2200",
                        "city": "København N"
                    },
                    "dayNullOpen": 1200,
                    "dayNullClose": 2000,
                    "dayOneOpen": 1200,
                    "dayOneClose": 2000,
                    "dayTwoOpen": 1200,
                    "dayTwoClose": 2000,
                    "dayThreeOpen": 1200,
                    "dayThreeClose": 2000,
                    "dayFourOpen": 1200,
                    "dayFourClose": 2000,
                    "dayFiveOpen": 1200,
                    "dayFiveClose": 2000,
                    "daySixOpen": 1200,
                    "daySixClose": 2000,
                    "x": 50.0,
                    "y": 72.0,
                    "angle": 90.0
                },
                {
                    "id": 127,
                    "name": "Temple bar",
                    "street": "Nørrebrogade",
                    "housenumber": "48",
                    "phone": "35374414",
                    "email": "too-long@email-adresse.example",
                    "website": "https://www.facebook.com/templebarCPH/",
                    "category": "BEER",
                    "description": "2 floors pool, fussball etc. 2 floors pool, fussball etc. 2 floors pool, fussball etc. 2 floors pool, fussball etc. 2 floors pool, fussball etc. 2 floors pool, fussball etc. 2 floors pool, fussball etc. 2 floors pool, fussball etc. 2 floors pool, fussball etc. 2 floors pool, fussball etc. 2 floors pool, fussball etc.",
                    "placeId": "ChIJe-fNI6pTUkYRDQ2kmIVrgKE",
                    "cityInfo": {
                        "zipCode": "2200",
                        "city": "København N"
                    },
                    "dayNullOpen": 1500,
                    "dayNullClose": 200,
                    "dayOneOpen": 1500,
                    "dayOneClose": 200,
                    "dayTwoOpen": 1500,
                    "dayTwoClose": 200,
                    "dayThreeOpen": 1500,
                    "dayThreeClose": 300,
                    "dayFourOpen": 1500,
                    "dayFourClose": 500,
                    "dayFiveOpen": 1500,
                    "dayFiveClose": 500,
                    "daySixOpen": 1500,
                    "daySixClose": 100,
                    "x": 42.0,
                    "y": 52.0,
                    "angle": 0.0}

            ];
            $scope.selectedShop = selectedShopFac.setSelectedShop({});
            $scope.showDialog = function (shop) {
                $scope.selectedShop = selectedShopFac.setSelectedShop(shop);
                if (!angular.isUndefined($scope.selectedShop.googleShopId)) {
                    googleFactory.getOpeningHours().success(function (data) {
                        $scope.selectedShop.rating = data + " \/ 5";
                    });
                } else {
                    $scope.selectedShop.rating = "no ratings";
                }
                $uibModal.open({
                    templateUrl: 'app/view1/shop/shop.html',
                    scope: $scope
                });
            };
        })

        .controller('addShopCtrl', ["$location", "$http", "$scope", "$timeout", "selectedShopFac", function ($location, $http, $scope, $timeout, selectedShopFac) {

                $scope.shop = selectedShopFac.getSelectedShop();

                $scope.saveShop = function () {

                    if (angular.isUndefined($scope.shop.id)) {
                        $http.post('api/shop/add', $scope.shop)
                                .success(function (data) {
                                    $timeout(function () {
                                        $location.path("#/view4");
                                    }, 100);
                                })
                                .error(function (data) {
                                    console.log("ERROR");
                                });
                    } else {
                        $http.post('api/shop/edit', $scope.shop)
                                .success(function (data) {
                                    $timeout(function () {
                                        $location.path("#/view4");
                                    }, 100);
                                })
                                .error(function (data) {
                                    console.log("ERROR");
                                });
                    }
                };

            }]);



