import './VideoList.scss';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videoList }) => {
    return (
        <>
            <h2 className='related-videos__title'>NEXT VIDEOS</h2>
            <ul className="related-videos__list">
                {videoList.map((video) => {
                    return (
                        <VideoItem
                            key={video.id}
                            id={video.id}
                            image={video.image}
                            title={video.title}
                            channel={video.channel}
                        />
                    )
                })}
            </ul>
        </>
    );
};

export default VideoList;

