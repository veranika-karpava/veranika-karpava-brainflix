import './VideoItem.scss';
import { NavLink } from 'react-router-dom';
import formatVideoImage from '../../utils/formatVideoImage';


const VideoItem = ({ title, image, channel, id }) => {

    return (
        <li className='related-videos__item'>
            <NavLink to={`/video-player/${id}`} className="related-videos__link">
                <div className='related-videos__box-image'>
                    <img className='related-videos__image' src={formatVideoImage(image)} alt={title} />
                </div>
                <div className='related-videos__content'>
                    <h3 className='related-videos__title-item'>{title}</h3>
                    <p className='related-videos__channel'>{channel}</p>
                </div>
            </NavLink>
        </li>
    );
};
export default VideoItem;