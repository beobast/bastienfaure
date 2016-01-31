/* global Package */

Package.describe({
    'name': 'highlightjs'
    , 'version': '0.0.1'
    , 'summary': 'highlight.js'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('ecmascript');

    api.addFiles(
        [
            'github-gist.css'
            , 'highlight.min.js'
        ]
        , 'client');

    api.export('hljs', 'client');
});
