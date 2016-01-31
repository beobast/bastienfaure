/* global State, Template */

const renderMath = window.renderMathInElement;
const hljs = window.hljs;
const md = window.markdownit({
    'html': true
    , 'highlight': (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            }
            catch (__) {}
        }
        return ''; // use external default escaping
    }
});

Template.note.onRendered(() => {
    const self = this;
    self.$('.mdl-layout__content').scrollTop(0);
    renderMath(self.$('.note-content')[0], {
        'delimiters': [
            { 'left': '$$', 'right': '$$', 'display': true }
            , { 'left': '$', 'right': '$', 'display': false }
        ]
    });
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
