/* global Template, Dispatch, Actions */

Template.navLink.events({
    'click': () => Dispatch(Actions.setSpace(Template.instance().data.value))
});
