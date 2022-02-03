const express = require('express');
const fs = require('fs');
const { v4: uuid } = require('uuid');
const videoRouter = express.Router();

// function for reading data in videos.json
const readFile = () => {
    const videosData = fs.readFileSync('./data/videos.json');
    return JSON.parse(videosData);
}

// function for writing data in videos.json
const writeFile = (videosData) => {
    fs.writeFileSync('./data/videos.json', JSON.stringify(videosData, null, 2));
}

const PORT = process.env.PORT || 5050;

// get request for videoList
videoRouter.get('/', (_req, res) => {
    let videosData = readFile();
    videosData = videosData.map(video => {
        return {
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image,
        }
    })
    res.status(200).send(videosData)
})

// get request with videoId for videoDetails
videoRouter.get('/:videoId', (req, res) => {
    const videoId = req.params.videoId;
    let videosData = readFile();
    const video = videosData.find(video => video.id === videoId);

    if (!video) {
        return res.status(404).send("Video not found");
    }
    return res.status(200).json(video);
});

// post request for adding comments
videoRouter.post("/:videoId/comments", (req, res) => {
    const { comment } = req.body;
    let videoId = req.params.videoId;
    const videosData = readFile();
    let selectedVideo = videosData.find(video => video.id === videoId);

    const newComment = {
        name: 'Veranika Karpava',
        comment: comment,
        id: uuid(),
        likes: 0,
        timestamp: Date.now()
    };

    selectedVideo.comments.unshift(newComment)
    writeFile(videosData)
    return res.status(200).send(videosData);
})


// post request for upload form
videoRouter.post('/', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Please make sure to include title and description of the video');
    }

    const uploadVideo = {
        id: uuid(),
        title: title,
        channel: 'John Smith',
        image: '/images/upload_video_preview.jpg',
        description: description,
        views: 45,
        likes: 38,
        duration: "03:06",
        timestamp: Date.now(),
        comments: [{
            "name": "Veranika Karpava",
            "comment": "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
            "likes": 0,
            "timestamp": Date.now()
        }]
    };

    const videosData = readFile();
    videosData.push(uploadVideo);
    writeFile(videosData);
    return res.status(201).json(uploadVideo);
});

module.exports = videoRouter;
