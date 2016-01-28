const chokidar = Npm.require('chokidar');
const path = Npm.require('path');
const fs = Npm.require('fs');
const curry = R.curry;
const videos = collections.videos;
const articles = collections.articles;


const getVideoInfo = (videoId, cb) => {
    const req = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&fields=items(snippet(title,description,thumbnails,tags))&key=${Meteor.settings.apiKey}`;
    HTTP.get(req, cb);
};

const saveVideoInfo = (db, videoId, error, result) => {
    if (error) {
        console.log(error);
    }
    else {
        const info = result.data.items[0].snippet;
        db.upsert({ videoId }, { videoId, 'title': info.title, 'description': info.description, 'thumbnails': info.thumbnails, 'tags': info.tags });
    }
};

const updateVideos = path => {
    fs.readFile(path, 'utf8', Meteor.bindEnvironment((error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            const ids = data.trim().split('\n');
            ids.forEach(id => getVideoInfo(id.trim(), curry(saveVideoInfo)(videos, id.trim())));
            videos.remove({ 'videoId': { '$nin': ids }}, error => error && console.log(error));
        }
    }));
};

const isArticle = filePath => path.extname(filePath) === '.txt';

const updateArticles = path => {
    if (!isArticle(path)) return;

    fs.readFile(path, 'utf8', Meteor.bindEnvironment((error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            const title = utils.getArticleTitle(data);
            articles.upsert(
                { path }
                , {
                    path
                    , data
                    , title
                    , 'description': utils.getArticleDescription(data)
                    , 'slug': utils.slugify(title)
                }
            );
        }
    }));
};

Meteor.startup(() => {
    const videosWatcher = chokidar.watch(path.join(Meteor.settings.root, 'videos/videos.txt'));
    const articlesWatcher = chokidar.watch(path.join(Meteor.settings.root, 'articles/'));

    videosWatcher
        .on('add', Meteor.bindEnvironment(path => updateVideos(path)))
        .on('change', Meteor.bindEnvironment(path => updateVideos(path)));

    articlesWatcher
        .on('add', Meteor.bindEnvironment(path => updateArticles(path)))
        .on('change', Meteor.bindEnvironment(path => updateArticles(path)));
});
