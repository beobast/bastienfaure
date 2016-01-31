/* global State, Template */

const md = window.markdownit({ 'html': true });

Template.note.onRendered(() => {
    const self = this;
    self.$('.mdl-layout__content').scrollTop(0);
});

Template.note.helpers({
    'currentNote': () => {
        const note = State.get('currentNote');
        return md.render(note ? note.data : 'Loading');
    }
});

Template.note.events({
    'click a': evt => {
        const href = evt.target ? evt.target.href : null;
        if (href) {
            evt.preventDefault();
            window.open(href);
        }
    }
});
