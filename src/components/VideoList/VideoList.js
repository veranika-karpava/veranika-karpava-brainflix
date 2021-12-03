import './VideoList.scss';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = (props) => {
    console.log(props)
    return (
        <ul className="related-videos__list">
            {props.shortVideos.map((video, i) => {
                console.log(video.id)
                return (
                    <VideoItem
                        key={i}
                        id={video.id}
                        image={video.image}
                        title={video.title}
                        channel={video.channel}
                    />
                )
            })}
        </ul>
    );
};

export default VideoList;