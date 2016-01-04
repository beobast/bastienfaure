const tpt = Template.videos;
const videos = collections.videos;

tpt.helpers({
    'videos': () => videos.find().fetch()
});
