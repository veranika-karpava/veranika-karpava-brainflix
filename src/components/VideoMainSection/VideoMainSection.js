import './VideoMainSection.scss';

const VideoMainSection = (props) => {
    const { image, video } = props.selectedVideo;

    return (
        <div className='video-container'>
            <video className='video-container__video' src={video} poster={image} controls></video>
        </div>
    );
};

export default VideoMainSection;



