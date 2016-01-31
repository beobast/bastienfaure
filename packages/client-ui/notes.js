/* global Template, State */

const tpt = Template.notes;

tpt.helpers({
    'notes': () => State.get('notes')
});
