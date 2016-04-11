angular.module('ContactsApp', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/contacts', {
                controller: 'ListController',
                templateUrl: 'views/list.html'
            }).when('/contact/new', {
                controller: 'NewController',
                templateUrl: 'views/new.html'
            }).when('/contact/:id', {
                controller: 'SingleController',
                templateUrl: 'views/single.html'
            });
        $locationProvider.html5Mode(true);
    })
    .value('options', {})
    .run(function (options, Fields) {
        Fields.get().success(function (data) {
            options.displayed_fields = data;
        });
    });