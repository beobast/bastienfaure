/* global Template */

Template.videoItem.onRendered(function() {
    const self = this;
    self.$('.description').dotdotdot({});
});

Template.videoItem.events({
    'click .mdl-card': () => window.open(`http://youtu.be/${Template.instance().data.videoId}`)
});
