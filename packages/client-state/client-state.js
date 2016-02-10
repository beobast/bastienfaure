/* global State, Action, R, collections, Meteor */

const find = R.find;
const equals = R.equals;
const keys = R.keys;
const concat = R.concat;
const contains = R.contains;
const last = R.last;
const head = R.head;

const videos = collections.videos;
const notes = collections.notes;


/** Initialize state */
(function() {
    const initState = {
        'userSpaces': [
            ['Notes', 'assignments', 'notes']
            , ['Brouillons', 'content_paste', 'notes']
            , ['Vidéos', 'play_circle_filled', 'videos']
        ]
        , 'adminSpaces': [
            ['Admin', 'lock_open', 'admin']
            , ['Déconnexion', 'exit_to_app', '']
        ]
        , 'spaces': []
        , 'videos': () => videos.find()
        , 'notes': []
        , 'currentTemplate': 'notes'
        , 'currentSpace': 'Notes'
        , 'currentNote': null
        , 'appBarTitle': 'Notes'
    };
    keys(initState).forEach(k => State.set(k, initState[k]));
}());


State.modify('spaces', () => concat(State.get('userSpaces'), Meteor.user() ? State.get('adminSpaces') : []));

State.modify('currentTemplate', state => {
    const type = Action.type();
    const payload = Action.payload();
    if (equals(type, 'SET_SPACE')) {
        if (equals(payload.space, 'Login')) return 'login';
        return last(find(s => equals(head(s), payload.space), State.get('spaces')));
    }
    if (equals(type, 'SET_NOTE')) return 'note';
    return state;
});

State.modify('currentSpace', state => {
    if (equals(Action.type(), 'SET_SPACE')) return Action.payload().space;
    return state;
});

State.modify('notes', () => {
    const type = State.get('currentSpace') === 'Notes' ? 'note' : 'draft';
    return notes.find({ 'type': type });
});

State.modify('currentNote', state => {
    const type = Action.type();
    const payload = Action.payload();
    if (equals(type, 'SET_SPACE')) return null;
    if (equals(type, 'SET_NOTE')) return notes.findOne({ 'slug': payload.slug });
    return state;
});

State.modify('appBarTitle', () => {
    const note = State.get('currentNote');
    const space = State.get('currentSpace');
    return contains(space, ['Notes', 'Brouillons']) && note ? `${space} - ${note.title}` : space;
});
