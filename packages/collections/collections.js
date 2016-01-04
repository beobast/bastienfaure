collections = {
    'videos': new Mongo.Collection('videos')
};

if (Meteor.isServer) {
    Meteor.publish('allVideos', () => collections.videos.find()); 
}

if (Meteor.isClient) {
    Meteor.subscribe('allVideos');
}
