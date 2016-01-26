const tpt = Template.videos;

tpt.helpers({
    'videos': () => State.get('videos') 
});
