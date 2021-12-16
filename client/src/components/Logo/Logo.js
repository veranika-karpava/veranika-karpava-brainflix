import { Link } from 'react-router-dom';
import './Logo.scss';
import brainflixlogo from '../../assets/images/brainflixlogo.svg';


const Logo = ({ path }) => {
    return (
        <div className='header__logo'>
            <Link to={path}>
                <img className='header__image-logo' src={brainflixlogo} alt='BrainFlix Logo' />
            </Link>
        </div>

    );
};

export default Logo;