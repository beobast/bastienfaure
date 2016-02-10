/* global Package */

Package.describe({
    'name': 'client-state'
    , 'version': '0.0.1'
    , 'summary': 'Flux Global State'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(
        [
            'ecmascript'
            , 'accounts-base'
            , 'meteorflux:meteorflux'
            , 'ramda:ramda'
            , 'collections'
            , 'utils'
        ]
        , 'client');
    api.addFiles('client-state.js', 'client');
});
