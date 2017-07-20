Package.describe({
    name: "ucsgames:collection-helpers",
    summary: "Transform Collections with self-defined helpers. Works with TAPi18n & other self-defined transforms!",
    version: "1.2.0",
    documentation: "README.md",
    git: "https://github.com/ucsgames/meteor-collection-helpers.git",
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.2');
    api.use([
        'underscore',
        'mongo']);
    api.addFiles('collection-helpers.js');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'underscore',
    'mongo',
    'dburles:collection-helpers']);
  api.addFiles('collection-helpers_tests.js');
});
