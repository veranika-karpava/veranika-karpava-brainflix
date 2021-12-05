import './VideoDetails.scss';
import CommentBox from '../CommentBox/CommentBox';
import viewsIcon from '../../assets/images/views.svg';
import likesIcon from '../../assets/images/likes.svg';

const VideoDetails = (props) => {
    const { title, channel, timestamp, views, likes, description, comments } = props.selectedVideo;
    const timestampDate = new Date(timestamp).toLocaleDateString("en-US", { timeZone: "UTC", year: "numeric", month: "2-digit", day: "2-digit" });

    console.log(timestampDate);

    return (
        <div className='video-content'>
            <h1 className='video-content__title'>{title}</h1>
            <div className='video-content__details'>
                <div className='video-content__publication'>
                    <p className='video-content__channel'>by {channel}</p>
                    <p className='video-content__date-publication'>{timestampDate}</p>
                </div>
                <div className='video-content__popularity'>
                    <p className='video-content__views-content'>
                        <img className='video-content__image-views' src={viewsIcon} alt='Views' />
                        {views}
                    </p>
                    <p className='video-content__likes-content'>
                        <img className='video-content__image-likes' src={likesIcon} alt='Likes' />
                        {likes}
                    </p>
                </div>
            </div>
            <div className='video-content__description'>
                <p className='video-content__text'>{description}</p>
                <p className='video-content__comments-counter'>{comments.length} Comments</p>
            </div>
            <CommentBox />
        </div>
    );
};

export default VideoDetails;