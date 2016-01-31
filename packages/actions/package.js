/* global Package */

Package.describe({
    'name': 'actions'
    , 'version': '0.0.1'
    , 'summary': 'Flux Action Types and Creators'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(
        [
            'ecmascript'
            , 'check'
        ]
        , 'client');
    api.addFiles('actions.js', 'client');
    api.export('Actions', 'client');
});
