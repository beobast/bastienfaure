(function () {
    Package.describe({
        'name': 'google-fonts',
        'version': '0.0.1',
        'summary': 'Google Roboto font and Material Design icons',
        'documentation': null
    });

    Package.onUse(function(api) {
        api.versionsFrom('1.2.0.2');
        api.use('ecmascript', 'client');

        api.addAssets(
            [
                'icons/MaterialIcons-Regular.ttf'
                , 'icons/MaterialIcons-Regular.woff'
                , 'icons/MaterialIcons-Regular.woff2'

                , 'roboto/Roboto-Black.ttf'
                , 'roboto/Roboto-BlackItalic.ttf'
                , 'roboto/Roboto-Bold.ttf'
                , 'roboto/Roboto-BoldItalic.ttf'
                , 'roboto/Roboto-Italic.ttf'
                , 'roboto/Roboto-Light.ttf'
                , 'roboto/Roboto-LightItalic.ttf'
                , 'roboto/Roboto-Medium.ttf'
                , 'roboto/Roboto-MediumItalic.ttf'
                , 'roboto/Roboto-Regular.ttf'
                , 'roboto/Roboto-Thin.ttf'
                , 'roboto/Roboto-ThinItalic.ttf'
            ]
            , 'client');

        api.addFiles(
            [
                'icons.css'
                , 'roboto.css'
            ]
            , 'client');
    });
}());
