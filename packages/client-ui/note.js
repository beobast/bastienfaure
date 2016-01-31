/* global State, Template */

const tpt = Template.note;
const md = window.markdownit({ 'html': true });

tpt.helpers({
    'currentNote': () => {
        const note = State.get('currentNote');
        return md.render(note ? note.data : 'Loading');
    }
});
