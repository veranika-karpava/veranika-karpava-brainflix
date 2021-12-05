import './VideoMainSection.scss';
// import fullscreen from '../../assets/images/fullscreen.svg';
// import play from '../../assets/images/play.svg';
// import volume_up from '../../assets/images/volume_up.svg';

const VideoMainSection = (props) => {
    const { image, video } = props.selectedVideo;

    return (
        <div className='video-container'>
            <video className='video-container__video' src={video} poster={image} controls></video>
        </div>
    );
};

export default VideoMainSection;



