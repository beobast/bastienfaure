Package.describe({
    name: 'sidebar',
    version: '0.0.1',
    summary: ''
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use(
        [
            'ecmascript'
            , 'blaze-html-templates'
        ]
        , 'client'
    );
    api.addFiles('sidebar.html', 'client');
});
