/* global Package */

Package.describe({
    'name': 'mdl'
    , 'version': '0.0.1'
    , 'summary': 'Material Design Lite'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use('ecmascript');
    api.addFiles(
        [
            'mdl.js',
            'mdl.css'
        ]
        , 'client'
    );
});
