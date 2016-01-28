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
const SET_ARTICLE = 'SET_ARTICLE';


// Action Creators

const setSpace = makeActionCreator(SET_SPACE, ['template', String]);
const setArticle = makeActionCreator(SET_ARTICLE, ['slug', String]);


Actions = {
    setSpace
    , setArticle
};
