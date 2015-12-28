module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'vote-no-restaurante/bower_components/angular/angular.js',
      'vote-no-restaurante/bower_components/angular-route/angular-route.js',
      'vote-no-restaurante/bower_components/angular-mocks/angular-mocks.js',
      'vote-no-restaurante/components/**/*.js',
      'vote-no-restaurante/view*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
