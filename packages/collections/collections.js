collections = {
    'videos': new Mongo.Collection('videos')
    , 'articles': new Mongo.Collection('articles')
};


if (Meteor.isServer) {
    collections.articles.remove({});
    Meteor.publish('videos', () => collections.videos.find()); 
    Meteor.publish('articles', () => collections.articles.find()); 
}

if (Meteor.isClient) {
    Meteor.subscribe('videos');
    Meteor.subscribe('articles');
}
