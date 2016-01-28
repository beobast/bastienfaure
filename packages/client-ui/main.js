/* global Template, State, R */

const tpt = Template.body;

tpt.helpers({
    'appBarTitle': () => State.get('appBarTitle')
    , 'tpt': () => ({ 'template': State.get('currentTemplate') })
    , 'navLinks': () => {
        const currentTemplate = State.get('currentTemplate');
        return R.map(navLink => ({
            'text': navLink[0]
            , 'icon': navLink[1]
            , 'selected': navLink[2] === currentTemplate ? 'selected' : ''
            , 'value': navLink[0] !== 'Accueil' ? navLink[0] : ''
        }), State.get('spaces'));
    }
});
