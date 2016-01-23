/**
 * Created by victor on 1/23/16.
 */
/**
 * Controller: InboxCtrl
 */
angular.module('EmailApp')
    .controller('InboxCtrl',
        function InboxCtrl ( $scope ) {
            'use strict';
            $scope.meta = {
                title: "My Inbox"
            };
        });