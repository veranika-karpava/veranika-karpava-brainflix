import { Link } from 'react-router-dom';
import './NavButton.scss';

const NavButton = ({ icon, title, path }) => {
    return (
        <Link to={path} className='nav-button__link'>
            <div className='nav-button__container'>
                <img className="nav-button__icon" src={icon} alt={title} />
                {title}
            </div>
        </Link>
    );
};

export default NavButton;