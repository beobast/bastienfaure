/* global Template, State */

Template.videos.helpers({
    'videos': () => State.get('videos')
});
