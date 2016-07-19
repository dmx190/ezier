angular.module('app')

    .directive('ngUpdateBlur', function (accountsFactory, $window) {
        return {
            restrict: 'A',
            scope: {
              value: '=ngUpdateBlur',
              type : '=ngTypeData',
              addressId : '=ngAddressId'
            },
            link: function (scope, element, attrs) {

                element.bind("blur", function (event) {

                    console.log(scope)
                    var account_id = $window.sessionStorage.accountId;

                    switch (scope.type){
                        case 'first_name' :
                            accountsFactory.putAccount(account_id, { first_name : scope.value }).then();
                            break;

                        case 'last_name' :
                            accountsFactory.putAccount(account_id, { last_name : scope.value }).then();
                            break;

                        case 'description' :
                            accountsFactory.putAccount(account_id, { description : scope.value }).then();
                            break;

                        case 'website' :
                            accountsFactory.putAccount(account_id, { website : scope.value }).then();
                            break;

                        case 'phone' :
                            accountsFactory.putAccount(account_id, { phone : scope.value }).then();
                            break;

                        case 'address1' :
                            accountsFactory.putAddress(scope.addressId, { address1 : scope.value }).then();
                            break;

                        case 'address2' :
                            accountsFactory.putAddress(scope.addressId, { address2 : scope.value }).then();
                            break;

                        case 'zipcode' :
                            accountsFactory.putAddress(scope.addressId, { zipcode : scope.value }).then();
                            break;

                        case 'city' :
                            accountsFactory.putAddress(scope.addressId, { city : scope.value }).then();
                            break;
                    }

                });
            }
        }
    })


    .directive('feedback', function () {
        return {
            restrict:'E',
            scope: {
                valor: '=',
                type: '='
            },
            controller: function($scope){
                $scope.$watch('valor', function() {
                    var separador = ".";

                    if($scope.valor){
                        $scope.num = $scope.valor.split(separador);
                        $scope.entero = $scope.num[0];
                        $scope.decimal = $scope.num[1];
                        $scope.start = [0, 0, 0, 0, 0];

                        for (var i = 0; i < $scope.entero; i++) {
                            $scope.start[i] = 1;
                        }

                        if ($scope.decimal > 0 && $scope.decimal <= 20) {
                            for (var i = 0; i < 5; i++) {
                                if ($scope.start[i] != 1) {
                                    $scope.start[i] = 2;
                                    break;
                                }
                            }
                        } else if ($scope.decimal > 20 && $scope.decimal <= 40) {
                            for (var i = 0; i < 5; i++) {
                                if ($scope.start[i] != 1) {
                                    $scope.start[i] = 3;
                                    break;
                                }
                            }
                        } else if ($scope.decimal > 40 && $scope.decimal <= 70) {
                            for (var i = 0; i < 5; i++) {
                                if ($scope.start[i] != 1) {
                                    $scope.start[i] = 4;
                                    break;
                                }
                            }
                        } else if ($scope.decimal > 70 && $scope.decimal <= 99) {
                            for (var i = 0; i < 5; i++) {
                                if ($scope.start[i] != 1) {
                                    $scope.start[i] = 5;
                                    break;
                                }
                            }
                        }

                        for (var i = 0; i < 5; i++) {
                            if ($scope.start[i] === 0) {
                                $scope.start[i] = 'img/iconStar0@3x.png';
                            }
                            if ($scope.start[i] === 1) {
                                $scope.start[i] = 'img/iconStar44@3x.png';
                            }
                            if ($scope.start[i] === 2) {
                                $scope.start[i] = 'img/iconStar02@3x.png';
                            }
                            if ($scope.start[i] === 3) {
                                $scope.start[i] = 'img/iconStar04@3x.png';
                            }
                            if ($scope.start[i] === 4) {
                                $scope.start[i] = 'img/iconStar06@3x.png';
                            }
                            if ($scope.start[i] === 5) {
                                $scope.start[i] = 'img/iconStar08@3x.png';
                            }
                        }
                    }

                })
            },
            template:
            '<p class="feedback-text"><span ng-if="type==2 ? false : true">FEEDBACK:</span>'+
                '<img ng-src="{{start[0]}}" width="9.87" height="9.73" class="feedback-starts"/>'+
                '<img ng-src="{{start[1]}}" width="9.87" height="9.73" class="feedback-starts"/>'+
                '<img ng-src="{{start[2]}}" width="9.87" height="9.73" class="feedback-starts"/>'+
                '<img ng-src="{{start[3]}}" width="9.87" height="9.73" class="feedback-starts"/>'+
                '<img ng-src="{{start[4]}}" width="9.87" height="9.73" class="feedback-starts"/>'+
            '</p>'
        };
    })

    .directive('feedbackskills', function () {
        return {
            restrict:'E',
            scope: {
                valor: '=',
                type: '='
            },
            controller: function($scope){
                $scope.$watch('valor', function() {
                    var separador = ".";

                    if($scope.valor){
                        $scope.num = $scope.valor.split(separador);
                        $scope.entero = $scope.num[0];
                        $scope.decimal = $scope.num[1];
                        $scope.start = [0, 0, 0, 0, 0];

                        for (var i = 0; i < $scope.entero; i++) {
                            $scope.start[i] = 1;
                        }

                        if ($scope.decimal > 0 && $scope.decimal <= 20) {
                            for (var i = 0; i < 5; i++) {
                                if ($scope.start[i] != 1) {
                                    $scope.start[i] = 2;
                                    break;
                                }
                            }
                        } else if ($scope.decimal > 20 && $scope.decimal <= 40) {
                            for (var i = 0; i < 5; i++) {
                                if ($scope.start[i] != 1) {
                                    $scope.start[i] = 3;
                                    break;
                                }
                            }
                        } else if ($scope.decimal > 40 && $scope.decimal <= 70) {
                            for (var i = 0; i < 5; i++) {
                                if ($scope.start[i] != 1) {
                                    $scope.start[i] = 4;
                                    break;
                                }
                            }
                        } else if ($scope.decimal > 70 && $scope.decimal <= 99) {
                            for (var i = 0; i < 5; i++) {
                                if ($scope.start[i] != 1) {
                                    $scope.start[i] = 5;
                                    break;
                                }
                            }
                        }

                        for (var i = 0; i < 5; i++) {
                            if ($scope.start[i] === 0) {
                                $scope.start[i] = 'img/iconStar0@3x.png';
                            }
                            if ($scope.start[i] === 1) {
                                $scope.start[i] = 'img/iconStar44@3x.png';
                            }
                            if ($scope.start[i] === 2) {
                                $scope.start[i] = 'img/iconStar02@3x.png';
                            }
                            if ($scope.start[i] === 3) {
                                $scope.start[i] = 'img/iconStar04@3x.png';
                            }
                            if ($scope.start[i] === 4) {
                                $scope.start[i] = 'img/iconStar06@3x.png';
                            }
                            if ($scope.start[i] === 5) {
                                $scope.start[i] = 'img/iconStar08@3x.png';
                            }
                        }
                    }

                })
            },
            template:
            '<p class="feedback-text"><span ng-if="type==2 ? false : true">FEEDBACK:</span>'+
            '<img ng-src="{{start[0]}}" width="5" height="5" class="feedback-stars-skills"/>'+
            '<img ng-src="{{start[1]}}" width="5" height="5" class="feedback-stars-skills"/>'+
            '<img ng-src="{{start[2]}}" width="5" height="5" class="feedback-stars-skills"/>'+
            '<img ng-src="{{start[3]}}" width="5" height="5" class="feedback-stars-skills"/>'+
            '<img ng-src="{{start[4]}}" width="5" height="5" class="feedback-stars-skills"/>'+
            '</p>'
        };
    })
;

(function () {
    'use strict';
angular.module('factory.accounts', [])

    .factory('accountsFactory', accountsFactory);

    accountsFactory.$inject = ['$http', 'oAuth'];

    function accountsFactory($http, oAuth){
        return {
            getAccounts: function(account, params){
                return $http({
                    method: 'GET',
                    url: 'api/accounts/'+account,
                    params: params
                });
            },
            getUser: function(user, params){
                return $http({
                    method: 'GET',
                    url: 'api/users/'+user,
                    params: params
                });
            },
            putAccount: function(id, params){
                return $http({
                    method: 'PATCH',
                    url: 'api/accounts/'+id,
                    data: params
                });
            },
            putAddress: function(id, params){
                return $http({
                    method: 'PATCH',
                    url: 'api/addresses/'+id,
                    data: params
                });
            }
        };

    };

})();