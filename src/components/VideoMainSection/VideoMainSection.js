import './VideoMainSection.scss';

const VideoMainSection = ({ selectedVideo }) => {
    if (!selectedVideo) {
        return <p>...Loading Video...</p>
    }
    const { image, video } = selectedVideo;

    return (
        <div className='video-container'>
            <video className='video-container__video' src={video} poster={image} controls></video>
        </div>
    );
};

export default VideoMainSection;



