/* global CodeMirror, codeMirror:true */
/* exported codeMirror */

codeMirror = textArea => CodeMirror.fromTextArea(textArea, {
    'mode': 'markdown'
    , 'keyMap': 'vim'
    , 'theme': 'solarized dark'
});
