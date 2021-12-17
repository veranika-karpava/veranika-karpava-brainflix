import './HomePage.scss';
import React, { Component } from 'react';
import axios from 'axios';
// import { API_URL, API_KEY } from '../../utils/apiUtil';
import VideoMainSection from '../../components/VideoMainSection/VideoMainSection';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import VideoList from '../../components/VideoList/VideoList';

// env variable = REACT_APP_API_URL

const API_URL = process.env.REACT_APP_API_URL;

class HomePage extends Component {
    state = {
        videoList: [],
        selectedVideo: null,
    }
    // component did mount
    componentDidMount() {
        const currentVideo = this.props.match.params.videoId;

        axios

            .get(`${API_URL}/videos`)
            .then((response) => {
                const videoResults = response.data;
                this.setState({
                    videoList: videoResults,
                });
                return videoResults[0].id; //defaultVideo
            })
            .then((defaultVideo) => {
                const videoToLoad = currentVideo ? currentVideo : defaultVideo;
                this.fetchVideoDetails(videoToLoad)
            })
            .catch((error) => console.log(error))
    }


    // component did update
    componentDidUpdate(prevProps) {
        const currentVideo = this.props.match.params.videoId;
        const prevVideo = prevProps.match.params.videoId;
        let videoToLoad;
        if (prevVideo !== currentVideo) {
            if (currentVideo === undefined) {
                videoToLoad = this.state.videoList[0].id;
            } else {
                videoToLoad = currentVideo;
            }
            this.fetchVideoDetails(videoToLoad);
        }
    }

    // fetch function
    fetchVideoDetails = (videoId) => {
        axios
            .get(`${API_URL}/videos/${videoId}`)
            .then(response => {
                const videoDetailResult = response.data;
                this.setState({
                    selectedVideo: videoDetailResult,
                });
            })
            .catch((error) => console.log(error))
    }

    render() {
        // for filter VideoList
        if (this.state.videoList.length === 0 || !this.state.selectedVideo) {
            return <p className="video-container__message">...Loading Video...</p>;
        }
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