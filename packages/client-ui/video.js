const tpt = Template.video;

tpt.onRendered(function() {
    const self = this;
    self.$('.description').dotdotdot({});
});
