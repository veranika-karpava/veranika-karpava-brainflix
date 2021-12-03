import './Logo.scss';
import brainflixlogo from '../../assets/images/brainflixlogo.svg';


const Logo = () => {
    return (
        <div className='header__logo'>
            <img className='header__image-logo' src={brainflixlogo} alt='BrainFlix Logo' />
        </div>
    );
};

export default Logo;