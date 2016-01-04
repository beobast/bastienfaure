const curry = R.curry;
const videos = collections.videos;

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

Meteor.startup(() => {
    const videoIds = [
        'XTlKK6aqJP8'
        , '2N7EUyfIbyw'
        , 'yxqvPnAGzLI'
        , 'Q_Isct_naRc'
        , 'Xr52eD8EVgk'
    ];
    videoIds.forEach(id => getVideoInfo(id, curry(saveVideoInfo)(videos, id)));
});
