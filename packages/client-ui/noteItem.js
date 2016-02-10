/* global Template, FlowRouter */

Template.noteItem.onRendered(function() {
    const self = this;
    self.$('.description').dotdotdot({});
});

Template.noteItem.events({
    'click .mdl-card': () => FlowRouter.go(`${FlowRouter.current().path}/${Template.instance().data.slug}`)
});

Template.noteItem.helpers({
    'cover': () => `images/${Template.instance().data.slug}.png`
});
