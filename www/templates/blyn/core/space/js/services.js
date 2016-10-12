appServices.factory('BSpace', function ($http, $q, BApi) {

    var service = {};
    var current = {};
    var config = {};

    //get current , return resolved user
    service.getCurrent = function () {
        return current;
    }

    service.getConfig = function (path) {
        if (angular.isString(path)) {
            return config[path];
        } else {
            return config;
        }
    }

    //retunr promise
    service.setCurrent = function (data) {
        var that = this;

        return loadConfig().then(function (config) {
            config = config;
            return that.loadSpace(data).then(function (space) {
                current = space;
                return $q.when(current);
            })
        })
    }

    //return promise
    service.loadSpace = function (findData) {
        if (!isNaN(findData) && findData > 0) {
            return BApi.space.get({
                id: findData
            }).$promise;
        }
        else if (angular.isString(findData)) {
            return BApi.space.get({
                name: findData
            }).$promise;
        } else {
            return $q.when(null);
        }
    }

    //return a promise
    var loadConfig = function (path) {
        return $http.get("templates/blyn/core/space/config.json").then(function (oConfig) {
            config = oConfig.data;
            return $q.when(config);
        })
    }

    return service;
});