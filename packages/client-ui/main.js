/* global Template, State, R */

Template.body.helpers({
    'appBarTitle': () => State.get('appBarTitle')
    , 'tpt': () => ({ 'template': State.get('currentTemplate') })
    , 'navLinks': () => {
        const currentSpace = State.get('currentSpace');
        return R.map(navLink => ({
            'text': navLink[0]
            , 'icon': navLink[1]
            , 'selected': navLink[0] === currentSpace ? 'selected' : ''
            , 'value': navLink[0]
        }), State.get('spaces'));
    }
});
