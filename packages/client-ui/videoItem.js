/* global Template */

const tpt = Template.videoItem;

tpt.onRendered(function() {
    const self = this;
    self.$('.description').dotdotdot({});
});

tpt.events({
    'click .mdl-card': () => window.open(`http://youtu.be/${Template.instance().data.videoId}`)
});
