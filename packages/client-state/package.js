Package.describe({
    name: 'client-state',
    version: '0.0.1',
    summary: ''
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(
        [
            'ecmascript'
            , 'meteorflux:meteorflux'
            , 'utils'
        ]
        , 'client');
    api.addFiles('client-state.js', 'client');
});
