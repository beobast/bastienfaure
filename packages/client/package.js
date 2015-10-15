Package.describe({
    name: 'client',
    version: '0.0.1',
    summary: 'Client entry point'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use(
        [
            'ecmascript'
            , 'google-fonts'
            , 'mdl'
            , 'blaze-html-templates'
        ]
        , 'client'
    );
    api.addFiles(
        [
            'card.html'
            ,'main.html'
        ]
        , 'client');
});
