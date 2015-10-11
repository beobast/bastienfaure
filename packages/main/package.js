Package.describe({
    name: 'main',
    version: '0.0.1',
    summary: 'Client entry point'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use(
        [
            'ecmascript'
            , 'blaze-html-templates'
            , 'sidebar'
            , 'content' 
        ]
    );
    api.addFiles('main.html', 'client');
});
