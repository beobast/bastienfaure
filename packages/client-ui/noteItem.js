/* global Template, FlowRouter */

Template.noteItem.onRendered(function() {
    const self = this;
    self.$('.description').dotdotdot({});
});

Template.noteItem.events({
    'click .mdl-card': () => FlowRouter.go(`${FlowRouter.current().path}/${Template.instance().data.slug}`)
});

Template.noteItem.helpers({
    'title': () => Template.instance().data.title
    , 'description': () => Template.instance().data.description
    , 'cover': () => `images/${Template.instance().data.slug}.png`
});
