describe('yesNoDirective', function () {

    it('should display Yes for positive input', function () {
        var template = '<span yes-no="myBoolean"></span>';
        var ctx = testContext({myBoolean: true, template: template});

        expect(ctx.element.find('span').html()).toBe('Yes');
    });

    it('should display No for negative input', function () {
        var template = '<span yes-no="myBoolean"></span>';
        var ctx = testContext({myBoolean: false, template: template});

        expect(ctx.element.find('span').html()).toBe('No');
    });

    it('should display Aye! for positive input', function () {
        var template = '<span yes-no="myBoolean" yes-label="Aye!" no-label="Arrgh!"></span>';
        var ctx = testContext({myBoolean: true, template: template});

        expect(ctx.element.find('span').html()).toBe('Aye!');
    });

    it('should display Arrgh! for negative input', function () {
        var template = '<span yes-no="myBoolean" yes-label="Aye!" no-label="Arrgh!"></span>';
        var ctx = testContext({myBoolean: false, template: template});

        expect(ctx.element.find('span').html()).toBe('Arrgh!');
    });


    function testContext(options) {
        module('app');

        var ctx = {};


        ctx.element = angular.element(options.template);

        inject(function ($rootScope, $compile) {

            ctx.scope = $rootScope;
            ctx.scope.myBoolean = options.myBoolean;

            if (options.yesLabel) {
                ctx.scope.yesLabel = options.yesLabel;
            }
            if (options.noLabel) {
                ctx.scope.noLabel = options.noLabel;
            }

            ctx.element = $compile(ctx.element)(ctx.scope);
            ctx.scope.$digest();
        });

        return ctx;
    }
});

