const tpt = Template.articleItem;

tpt.onRendered(function() {
    const self = this;
    self.$('.description').dotdotdot({});
});

tpt.events({
    'click .mdl-card': () => Dispatch('ARTICLE', { 'path': Template.instance().data.path }) 
});

tpt.helpers({
    'title': () => 'title' 
    , 'description': () => Template.instance().data.path
});
