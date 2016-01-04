const latinize = utils.latinize;

State.set('appBarTitle', 'Accueil');

Register(() => {
    if (Action.is('NAVLINK')) {
        State.modify('appBarTitle', (state = 'Accueil') => Action.text);
        State.modify('currentTemplate', (state = 'Accueil') => latinize(Action.text.toLowerCase()));
    }
});
