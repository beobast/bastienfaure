/* global Package */

Package.describe({
    'name': 'router'
    , 'version': '0.0.1'
    , 'summary': 'Client side routing with FlowRouter'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(
        [
            'ecmascript'
            , 'meteorflux:meteorflux'
            , 'kadira:flow-router'
            , 'actions'
        ]
        , 'client');
    api.addFiles('router.js', 'client');
});
