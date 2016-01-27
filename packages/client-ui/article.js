/* global State, Template */

const tpt = Template.article;
const md = window.markdownit({ 'html': true });

tpt.helpers({
    'currentArticle': () => {
        const article = State.get('currentArticle');
        return md.render(article ? article.data : 'Loading');
    }
});
