Package.describe({
  name: 'client',
  version: '0.0.1',
  summary: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use(
      [
          'ecmascript'
          , 'google-fonts'
          , 'mdl'
      ]
      , 'client');
  api.imply('main', 'client');
});
