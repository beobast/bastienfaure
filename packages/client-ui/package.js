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
            , 'kadira:flow-router'
            , 'actions'
            , 'collections'
            , 'client-state'
            , 'router'
            , 'utils'
            , 'ramda:ramda'
            , 'parser'
            , 'reactive-var'
        ]
        , 'client'
    );
    api.addFiles(
        [
            'navLink.html'
            , 'navLink.js'
            , 'videoItem.html'
            , 'videoItem.js'
            , 'videos.html'
            , 'videos.js'
            , 'article.html'
            , 'article.js'
            , 'articleItem.html'
            , 'articleItem.js'
            , 'articles.html'
            , 'articles.js'
            , 'main.html'
            , 'main.js'
        ]
        , 'client');
});
