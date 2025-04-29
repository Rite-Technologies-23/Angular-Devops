module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-junit-reporter'), // Add the junit reporter plugin
      require('@angular-devkit/build-angular/plugins/karma')
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
    reporters: ['progress', 'kjhtml', 'coverage', 'junit'], // Include junit reporter
    junitReporter: {
      outputDir: 'test-results', // Directory to output the XML file
      outputFile: 'test-results.xml', // Filename for the report
      useBrowserName: false // Optionally, don't include the browser name in the output
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
