collections = {
    'videos': new Mongo.Collection('videos')
    , 'notes': new Mongo.Collection('notes')
};


if (Meteor.isServer) {
    Meteor.publish('videos', () => collections.videos.find());
    Meteor.publish('notes', () => collections.notes.find());
}

if (Meteor.isClient) {
    Meteor.subscribe('videos');
    Meteor.subscribe('notes');
}
