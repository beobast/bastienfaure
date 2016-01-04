Package.describe({
    name: 'client-ui',
    version: '0.0.1',
    summary: 'Client User Interface'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(
        [
            'ecmascript'
            , 'google-fonts'
            , 'mdl'
            , 'blaze-html-templates'
            , 'meteorflux:meteorflux'
            , 'collections'
            , 'client-state'
        ]
        , 'client'
    );
    api.addFiles(
        [
            'video.html'
            , 'video.js'
            , 'navLink.html'
            , 'navLink.js'
            , 'videos.html'
            , 'videos.js'
            , 'main.html'
            , 'main.js'
        ]
        , 'client');
});
