import './Avatar.scss';
import mohan_muruge from '../../assets/images/mohan_muruge.jpg';


function Avatar() {
    return (
        <div className="avatar">
            <img src={mohan_muruge} alt="Mohan-muruge Avatar" className="avatar__image" />
        </div>
    );
};

export default Avatar;