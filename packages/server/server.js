/* global Npm, R, HTTP, collections, Meteor, utils, Accounts */

const chokidar = Npm.require('chokidar');
const path = Npm.require('path');
const fs = Npm.require('fs');
const curry = R.curry;
const videos = collections.videos;
const notes = collections.notes;


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

const isNote = filePath => path.extname(filePath) === '.txt';

const updateNotes = (path, type) => {
    if (!isNote(path)) return;

    fs.readFile(path, 'utf8', Meteor.bindEnvironment((error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            const title = utils.getNoteTitle(data);
            const slug = utils.slugify(title);
            notes.upsert(
                { path }
                , {
                    path
                    , data
                    , title
                    , 'description': utils.getNoteDescription(data)
                    , slug
                    , type
                }
            );
        }
    }));
};


Meteor.startup(() => {

    const username = 'faureb';
    const password = username;
    !Accounts.findUserByUsername(username) && Accounts.createUser({ username, password });

    videos.remove({});
    notes.remove({});

    const videosWatcher = chokidar.watch(path.join(Meteor.settings.root, 'videos/videos.txt'), { 'ignorePermissionErrors': true });
    const notesWatcher = chokidar.watch(path.join(Meteor.settings.root, 'notes/'), { 'ignorePermissionErrors': true });
    const draftsWatcher = chokidar.watch(path.join(Meteor.settings.root, 'drafts/'), { 'ignorePermissionErrors': true });

    videosWatcher
        .on('add', Meteor.bindEnvironment(path => updateVideos(path)))
        .on('change', Meteor.bindEnvironment(path => updateVideos(path)));

    notesWatcher
        .on('add', Meteor.bindEnvironment(path => updateNotes(path, 'note')))
        .on('change', Meteor.bindEnvironment(path => updateNotes(path, 'note')));

    draftsWatcher
        .on('add', Meteor.bindEnvironment(path => updateNotes(path, 'draft')))
        .on('change', Meteor.bindEnvironment(path => updateNotes(path, 'draft')));
});
