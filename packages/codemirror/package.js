/* global Package */

Package.describe({
    'name': 'codemirror'
    , 'version': '0.0.1'
    , 'summary': 'CodeMirror'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('ecmascript', 'client');
    api.addFiles(
        [
            'codemirror.css'
            , 'solarized.css'
            , 'codemirror.js'
            , 'markdown.js'
            , 'vim.js'
            , 'wrapper.js'
        ]
        , 'client');
    api.export('codeMirror', 'client');
    // api.addFiles('markdown.js', 'client');
});
