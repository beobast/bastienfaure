Package.describe({
    name: 'content',
    version: '0.0.1',
    summary: 'Content'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use(
        [
            'ecmascript'
            , 'blaze-html-templates'
            , 'card'
        ]
        , 'client'
    );
    api.addFiles('content.html', 'client');
});
