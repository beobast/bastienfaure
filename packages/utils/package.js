/* global Package */

Package.describe({
  'name': 'utils'
  , 'version': '0.0.1'
  , 'summary': 'Utilities Functions'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('utils.js');
  api.export('utils');
});
