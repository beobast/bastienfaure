/* global Template, FlowRouter, utils */

const tpt = Template.noteItem;

tpt.onRendered(function() {
    const self = this;
    self.$('.description').dotdotdot({});
});

tpt.events({
    'click .mdl-card': () => FlowRouter.go(`${FlowRouter.current().path}/${utils.slugify(Template.instance().data.title)}`)
});

tpt.helpers({
    'title': () => Template.instance().data.title
    , 'description': () => Template.instance().data.description
});
