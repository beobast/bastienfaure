/* global State, Template, codeMirror */

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

md.renderer.rules.table_open = () => '<table class="mdl-data-table mdl-shadow--2dp">';

const buffer = new ReactiveVar('');

Template.note.onRendered(() => {
    const self = this;
    self.$('.mdl-layout__content').scrollTop(0);
    const textArea = self.$('.codemirror')[0];
    const noteContent = self.$('.note-content')[0];
    noteContent && renderMath(noteContent, {
        'delimiters': [
            { 'left': '$$', 'right': '$$', 'display': true }
            , { 'left': '$', 'right': '$', 'display': false }
        ]
    });
    /* const myCodeMirror = textArea && codeMirror(textArea);
    myCodeMirror.on('change', c => buffer.set(c.getValue()));*/
});

Template.note.helpers({
    'currentNote': () => {
        const note = State.get('currentNote');
        return md.render(note ? note.data : 'Loading');
    }
    , 'raw': () => {
        const note = State.get('currentNote');
        return note ? note.data : 'Loading';
    }
    , 'buffer': () => md.render(buffer.get())
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
