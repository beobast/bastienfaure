/* global State, Action, R, collections */

const find = R.find;
const equals = R.equals;
const head = R.head;
const keys = R.keys;

const videos = collections.videos;
const notes = collections.notes;


/** Initialize state */
(function() {
    const initState = {
        'spaces': [
            ['Notes', 'assignments', 'notes']
            , ['Vidéos', 'play_circle_filled', 'videos']
        ]
        , 'videos': () => videos.find()
        , 'notes': () => notes.find()
        , 'currentTemplate': 'notes'
        , 'currentNote': null
        , 'appBarTitle': 'Notes'
    };
    keys(initState).forEach(k => State.set(k, initState[k]));
}());


State.modify('currentTemplate', state => {
    const type = Action.type();
    const payload = Action.payload();
    if (equals(type, 'SET_SPACE')) return payload.template;
    if (equals(type, 'SET_NOTE')) return 'note';
    return state;
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
    return head(find(space => equals(space[2], State.get('currentTemplate')), State.get('spaces')) || [note ? note.title : 'Loading']);
});
