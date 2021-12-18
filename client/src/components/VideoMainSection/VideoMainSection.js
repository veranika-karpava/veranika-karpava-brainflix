import './VideoMainSection.scss';
import formatVideoImage from '../../utils/formatVideoImage';

const VideoMainSection = ({ selectedVideo }) => {
    const { image } = selectedVideo;

    return (
        <div className='video-container'>
            <video className='video-container__video' poster={formatVideoImage(image)} controls></video>
        </div>
    );
};

export default VideoMainSection;



