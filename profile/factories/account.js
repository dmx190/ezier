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