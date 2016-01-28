/* global Template, FlowRouter, utils */

Template.navLink.events({
    'click': () => FlowRouter.go(`/${utils.latinize(Template.instance().data.value).toLowerCase()}`)
});
