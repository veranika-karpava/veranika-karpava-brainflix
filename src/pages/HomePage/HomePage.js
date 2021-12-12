import './HomePage.scss';
import React, { Component } from 'react';
import axios from 'axios';
import { API_URL, API_KEY } from '../../utils/apiUtil';
import VideoMainSection from '../../components/VideoMainSection/VideoMainSection';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import VideoList from '../../components/VideoList/VideoList';
// import videoData from '../../data/videos.json';
// import videoDataDetail from '../../data/video-details.json';

class HomePage extends Component {
    state = {
        videoList: [],
        selectedVideo: null,
    }

    componentDidMount() {
        console.log("Home Page :: component did mount");
        const currentVideo = this.props.match.params.videoId;

        axios
            .get(`${API_URL}/videos${API_KEY}`)
            .then((response) => {
                const videoResults = response.data;
                console.log("All movies data", response.data);
                this.setState({
                    videoList: videoResults,
                });
                return videoResults[0].id;
            })
            .then((defaultVideo) => {
                const videoToLoad = currentVideo ? currentVideo : defaultVideo;
                this.fetchVideoDetails(videoToLoad)
                console.log(videoToLoad)

            })
            .catch((error) => console.log(error))
    }

    componentDidUpdate(prevProps) {
        console.log("Home Page :: component did update");
        console.log("Updated URL params", this.props.match.params.videoId);
        const currentVideo = this.props.match.params.videoId;
        const prevVideo = prevProps.match.params.videoId;
        let videoToLoad;

        console.log('List', this.state.videoList)


        if (prevVideo !== currentVideo) {
            if (currentVideo === undefined) {
                videoToLoad = this.state.videoList[0].id;
            } else {
                videoToLoad = currentVideo;
            }
            this.fetchVideoDetails(currentVideo);
            console.log(this.fetchVideoDetails(currentVideo))
        }
    }

    fetchVideoDetails = (videoId) => {
        axios
            .get(`${API_URL}/videos/${videoId}${API_KEY}`)
            .then(response => {
                const videoDetailResult = response.data;
                this.setState({
                    selectedVideo: videoDetailResult,
                });
            })
            .catch((error) => console.log(error))
    }

    // state = {
    //     shortVideos: videoData,
    //     selectedVideo: videoDataDetail[0]
    // }

    // handleVideoSelect = title => {
    //     this.setState({
    //         selectedVideo: videoDataDetail.find(video => video.title === title)
    //     })
    // };

    render() {
        if (this.state.videoList.length === 0 || !this.state.selectedVideo)
            return <p className="video-container__message">...Loading Video...</p>;
        const newVideoList = this.state.videoList.filter(video => video.id !== this.state.selectedVideo.id);

        return (
            <>
                <main>
                    <section className="video-section">
                        <VideoMainSection selectedVideo={this.state.selectedVideo} />
                        <div className='video-section__content-main'>
                            <VideoDetails selectedVideo={this.state.selectedVideo} />
                            <aside className='related-videos'>
                                <VideoList videoList={newVideoList} />
                            </aside>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default HomePage;