/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// Tun on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100;

// Cancel Karma's synchronous start,
// we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};

System.config({
  baseURL: '/base',
  defaultJSExtensions: true,
  map: {
    
    '@demoiselle': 'dist/all/@demoiselel',
    'rxjs': 'node_modules/rxjs',
    'parse5': 'dist/all/empty.js',
    'angular2/src/alt_router/router_testing_providers':
        'dist/all/angular2/src/alt_router/router_testing_providers.js'
  },
  packages: {
    '@demoiselle/security/testing': {main: 'index.js', defaultExtension: 'js'},
    '@demoiselle/security': {main: 'index.js', defaultExtension: 'js'},
    '@demoiselle/http/testing': {main: 'index.js', defaultExtension: 'js'},
    '@demoiselle/http': {main: 'index.js', defaultExtension: 'js'}
  }
});


// Set up the test injector, then import all the specs, execute their `main()`
// method and kick off Karma (Jasmine).
// System.import('@angular/core/testing')
//     .then(function(coreTesting) {
//       return System.import('@angular/platform-browser-dynamic/testing')
//           .then(function(browserTesting) {
//             coreTesting.TestBed.initTestEnvironment(
//                 browserTesting.BrowserDynamicTestingModule,
//                 browserTesting.platformBrowserDynamicTesting());
//           });
//     })
//     .then(function() {
//       return Promise.all(Object
//                              .keys(window.__karma__.files)  // All files served by Karma.
//                              .filter(onlySpecFiles)
//                              .map(window.file2moduleName)  // Normalize paths to module names.
//                              .map(function(path) {
//                                return System.import(path).then(function(module) {
//                                  if (module.hasOwnProperty('main')) {
//                                    module.main();
//                                  } else {
//                                    throw new Error(
//                                        'Module ' + path + ' does not implement main() method.');
//                                  }
//                                });
//                              }));
//     })
//     .then(
//         function() { __karma__.start(); },
//         function(error) { __karma__.error(error.stack || error); });


// function onlySpecFiles(path) {
//   return /_spec\.js$/.test(path);
// }