Package.describe({
    name: 'card',
    version: '0.0.1',
    summary: 'Card'
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
    api.addFiles(
        [
            'card.css'
            , 'card.html'
        ]
        , 'client');
});
