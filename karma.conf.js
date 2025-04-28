module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-junit-reporter'),  // Add this plugin for JUnit reporting
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/angular.io-example'),
      subdir: 'lcov-report',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        { type: 'lcovonly' },
        { type: 'json-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml', 'coverage', 'junit'],  // Include 'junit' reporter here
    junitReporter: {
      outputDir: 'test-results',  // Specify the directory where the XML report will be saved
      outputFile: 'test-results.xml',
      useBrowserName: false  // Don't include browser name in the filename
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    restartOnFileChange: true
  });
};
