module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter')  // Add the JUnit Reporter
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/angular.io-example'),
      subdir: 'lcov-report',
      reporters: [
        { type: 'html' },         // generates ./coverage/angular.io-example/lcov-report/index.html
        { type: 'text-summary' },
        { type: 'lcovonly' },
        { type: 'json-summary' }  // needed for GitHub Actions to enforce coverage thresholds
      ]
    },
    reporters: ['progress', 'kjhtml', 'coverage', 'junit'],  // Include junit reporter in the list of reporters
    junitReporter: {
      outputDir: 'test-results',  // Directory where the JUnit XML will be saved
      outputFile: 'test-results.xml', // File name for the JUnit report
      useBrowserName: false  // Avoid appending the browser name to the report
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
