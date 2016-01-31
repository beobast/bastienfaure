/* global Actions:true, check */
/* exported Actions */

const makeActionCreator = (type, ...argNames) => {
    return function(...args) {
        let action = { type };
        argNames.forEach((arg, index) => {
            check(arg[0], arg[1]);
            action[arg[0]] = args[index];
        });
        return action;
    };
};



// Action Types

const SET_SPACE = 'SET_SPACE';
const SET_NOTE = 'SET_NOTE';


// Action Creators

const setSpace = makeActionCreator(SET_SPACE, ['template', String]);
const setNote = makeActionCreator(SET_NOTE, ['slug', String]);


Actions = {
    setSpace
    , setNote
};
