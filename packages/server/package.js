Package.describe({
  name: 'server',
  version: '0.0.1',
  summary: 'Server'
});

Npm.depends({
    'chokidar': '1.4.2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(
      [
        'ecmascript'
        , 'http'
        , 'ramda:ramda'
        , 'collections'
        , 'utils'
    ], 'server');
  api.addFiles('server.js', 'server');
});
