/* global Template, State */

Template.notes.helpers({
    'notes': () => State.get('notes')
});
