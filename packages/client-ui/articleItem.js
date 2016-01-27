/* global Dispatch, Template, Actions */

const tpt = Template.articleItem;

tpt.onRendered(function() {
    const self = this;
    self.$('.description').dotdotdot({});
});

tpt.events({
    // 'click .mdl-card': () => Dispatch('SET_ARTICLE', { 'id': Template.instance().data.path })
    'click .mdl-card': () => Dispatch(Actions.setArticle(Template.instance().data.path))
});

tpt.helpers({
    'title': () => 'title'
    , 'description': () => Template.instance().data.path
});
