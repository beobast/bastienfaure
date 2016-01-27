/* global Template, State */

const tpt = Template.articles;

tpt.helpers({
    'articles': () => State.get('articles')
});
