import './VideoItem.scss'

const VideoItem = ({ image, title, channel }) => {
    const handleVideoSelect = (e) => {
        e.preventDefault();
    }

    return (
        <li className='related-videos__item' onClick={handleVideoSelect}>
            <div className='related-videos__box-image'>
                <img className='related-videos__image' src={image} alt={title} />
            </div>
            <div className='related-videos__content'>
                <h3 className='related-videos__title-item'>{title}</h3>
                <p className='related-videos__channel'>{channel}</p>
            </div>
        </li>
    );
};
export default VideoItem;