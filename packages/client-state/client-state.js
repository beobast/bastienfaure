const find = R.find;
const equals = R.equals;
const head = R.head;

const videos = collections.videos;
const articles = collections.articles;

State.set('currentTemplate', 'articles');
State.set('spaces', [
    ['Accueil', 'home', 'home']
    , ['Articles', 'description', 'articles']
    , ['Notes', 'assignments', 'notes']
    , ['Vidéos', 'play_circle_filled', 'videos']
    , ['Liens', 'link', 'links']
    , ['Contact', 'mail', 'contact']
]);
State.set('currentArticle', null);
State.set('videos', videos.find());
State.set('articles', articles.find());
State.set('appBarTitle', () => {
    return head(find(space => equals(space[2], State.get('currentTemplate')), State.get('spaces')) || [State.get('currentArticle').path]);
});

const reset = () => {
    State.set('currentArticle', null);
};

Register(() => {
    if (Action.is('NAVLINK')) {
        State.modify('currentTemplate', () => Action.template);
        reset();
    }
    else if (Action.is('ARTICLE')) {
        State.modify('currentArticle', () => articles.findOne({ 'path': Action.path }));
        State.modify('currentTemplate', () => 'article');
    }
});
