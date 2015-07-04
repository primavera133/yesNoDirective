module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],

        // list of files / patterns to load in the browser
        files: [
            // libraries
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',

            // our app
            'test/app.js',
            'js/yesNoDirective.js',

            // tests
            'test/yesNoSpec.js'
        ],

        autoWatch: true,
        browsers: ['PhantomJS']
    });
};
