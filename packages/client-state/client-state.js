/* global State, Action, R, collections */

const find = R.find;
const equals = R.equals;
const head = R.head;
const keys = R.keys;
const map = R.map;

const videos = collections.videos;
const articles = collections.articles;


/** Initialize state */
(function() {
    const initState = {
        'spaces': [
            ['Accueil', 'home', 'home']
            , ['Articles', 'description', 'articles']
            , ['Notes', 'assignments', 'notes']
            , ['Vidéos', 'play_circle_filled', 'videos']
            , ['Liens', 'link', 'links']
            , ['Contact', 'mail', 'contact']
        ]
        , 'videos': () => videos.find()
        , 'articles': () => articles.find()
        , 'currentTemplate': 'articles'
        , 'currentArticle': null
        , 'appBarTitle': 'Articles'
    };
    map(key => State.set(key, initState[key]), keys(initState));
}());


State.modify('currentTemplate', state => {
    const type = Action.type();
    const payload = Action.payload();
    if (equals(type, 'SET_SPACE')) return payload.template;
    if (equals(type, 'SET_ARTICLE')) return 'article';
    return state;
});

State.modify('currentArticle', state => {
    const type = Action.type();
    const payload = Action.payload();
    if (equals(type, 'SET_SPACE')) return null;
    if (equals(type, 'SET_ARTICLE')) return articles.findOne({ 'path': payload.id });
    return state;
});

State.modify('appBarTitle', () => {
    return head(find(space => equals(space[2], State.get('currentTemplate')), State.get('spaces')) || [State.get('currentArticle').path]);
});
