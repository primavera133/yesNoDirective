(function () {
    'use strict';

    var module = angular.module('yes-no', ['ng']);

    module.provider('yesNoConfig', [function() {
        this.yesLabel = 'Yes';
        this.noLabel = 'No';

        var self = this;
        this.$get = function() {
            return {
                yesLabel: self.yesLabel,
                noLabel: self.noLabel
            };
        };
    }]);

    module.directive('yesNo', ['yesNoConfig', function (yesNoConfig) {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                yesNo: '=',
                yesLabel: '@',
                noLabel: '@'
            },
            template: '<span><span ng-if="yesNo" ng-bind="yesLabel" class="yes-no-positive"></span>'+
            '<span ng-if="!yesNo" ng-bind=noLabel  class="yes-no-negative"></span></span>',
            compile: function (element, attrs) {
                if (!attrs.yesLabel) {
                    attrs.yesLabel = yesNoConfig.yesLabel;
                }
                if (!attrs.noLabel) {
                    attrs.noLabel = yesNoConfig.noLabel;
                }

                return this.link;
            }
        };
    }]);
})();
