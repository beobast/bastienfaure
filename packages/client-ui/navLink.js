/* global Template, FlowRouter, utils, Meteor, R */

Template.navLink.events({
    'click': () => {
        const route = utils.latinize(Template.instance().data.value).toLowerCase();
        if (R.equals(route, 'deconnexion')) {
            Meteor.logout();
            FlowRouter.go(`/`);
        }
        else {
            FlowRouter.go(`/${route}`);
        }
    }
});
