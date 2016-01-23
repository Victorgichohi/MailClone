/**
 * Created by victor on 1/23/16.
 */
angular.module('EmailApp', [
    'ngRoute'
]).config(function ( $routeProvider ) {
    'use strict';
    $routeProvider
        .when('/inbox', {
            templateUrl: 'views/inbox.html',
            controller: 'InboxCtrl'
        })
        .otherwise({
            redirectTo: '/inbox'
        });
});