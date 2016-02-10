/* global Template, Meteor, FlowRouter */

Template.login.events({
    'click button': (evt, tpt) => {
        Meteor.loginWithPassword(tpt.$('#username').val(), tpt.$('#password').val(), error => {
            error ? alert(error) : FlowRouter.go('/');
        });
    }
});
