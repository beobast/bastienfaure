/* global Package */

Package.describe({
  'name': 'parser'
  , 'version': '0.0.1'
  , 'summary': 'Markdown Parser'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('markdown-it.js', 'client');
});
